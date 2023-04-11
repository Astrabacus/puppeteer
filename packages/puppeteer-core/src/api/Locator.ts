/**
 * Copyright 2023 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {AbortError, TimeoutError} from '../common/Errors.js';
import {EventEmitter} from '../common/EventEmitter.js';
import type {MouseButton} from '../common/Input.js';
import {debugError} from '../common/util.js';
import {isErrorLike} from '../util/ErrorLike.js';

import {ElementHandle, BoundingBox} from './ElementHandle.js';
import type {Page} from './Page.js';

/**
 * @public
 * @experimental
 */
export interface LocatorOptions {
  /**
   * Whether to wait for the element to be `visible` or `hidden`.
   */
  visibility: 'hidden' | 'visible';
  /**
   * Total timeout for the entire locator operation.
   */
  timeout: number;
  /**
   * Timeout for individual operations inside the locator. On errors the
   * operation is retried as long as {@link LocatorOptions.timeout} is not
   * exceeded. This timeout should be generally much lower as locating an
   * element means multiple asynchronious operations.
   */
  operationTimeout: number;
}

/**
 * @internal
 */
type ActionCondition = (
  element: ElementHandle,
  abortController: AbortController
) => Promise<void>;

/**
 * @internal
 */
export interface ActionOptions {
  abortController?: AbortController;
  conditions: ActionCondition[];
}

/**
 * All the events that a locator instance may emit.
 *
 * @public
 * @experimental
 */
export enum LocatorEmittedEvents {
  /**
   * Emitted every time before the locator performs an action on the located element(s).
   */
  Action = 'action',
}

/**
 * @public
 * @experimental
 */
export interface LocatorEventObject {
  [LocatorEmittedEvents.Action]: never;
}

/**
 * Locators describe a strategy of locating elements and performing an action on
 * them. If the action fails because the element are not ready for the action,
 * the whole operation is retried.
 *
 * @public
 * @experimental
 */
export class Locator extends EventEmitter {
  #page: Page;
  #selector: string;
  #options: LocatorOptions;

  constructor(
    page: Page,
    selector: string,
    options: LocatorOptions = {
      visibility: 'visible',
      timeout: page.getDefaultTimeout(),
      operationTimeout: 1000,
    }
  ) {
    super();
    this.#page = page;
    this.#selector = selector;
    this.#options = options;
  }

  override on<K extends keyof LocatorEventObject>(
    eventName: K,
    handler: (event: LocatorEventObject[K]) => void
  ): Locator {
    return super.on(eventName, handler) as Locator;
  }

  override once<K extends keyof LocatorEventObject>(
    eventName: K,
    handler: (event: LocatorEventObject[K]) => void
  ): Locator {
    return super.once(eventName, handler) as Locator;
  }

  override off<K extends keyof LocatorEventObject>(
    eventName: K,
    handler: (event: LocatorEventObject[K]) => void
  ): Locator {
    return super.off(eventName, handler) as Locator;
  }

  /**
   * Retries the `fn` until a truthy error is returned. Errors are not retried.
   */
  async #waitForFunction(
    fn: () => unknown,
    abortController?: AbortController,
    timeout = this.#options.operationTimeout
  ): Promise<void> {
    let isActive = true;
    const timeoutId = setTimeout(() => {
      isActive = false;
    }, timeout);
    while (isActive) {
      if (abortController?.signal.aborted) {
        throw new Error(`waitForFunction was aborted.`);
      }
      const result = await fn();
      if (result) {
        clearTimeout(timeoutId);
        return;
      }
      await new Promise(resolve => {
        return setTimeout(resolve, 100);
      });
    }
    abortController?.abort();
    throw new TimeoutError(
      `waitForFunction timed out. The timeout is ${timeout}ms.`
    );
  }

  /**
   * Checks if the element is in the viewport and auto-scrolls it if it is not.
   */
  #ensureElementIsInTheViewport = async (
    element: ElementHandle,
    abortController: AbortController
  ): Promise<void> => {
    function checkAbortController() {
      if (abortController?.signal.aborted) {
        throw new Error(`ensureElementIsInTheViewport was aborted.`);
      }
    }
    // Side-effect: this also checks if it is connected.
    const isIntersectingViewport = await element.isIntersectingViewport({
      threshold: 0,
    });
    checkAbortController();
    if (!isIntersectingViewport) {
      await element.scrollIntoView();
      checkAbortController();
      await this.#waitForFunction(async () => {
        return await element.isIntersectingViewport({
          threshold: 0,
        });
      }, abortController);
      checkAbortController();
    }
  };

  /**
   * Waits for the element to become visible or hidden. visibility === 'visible'
   * means that the element has a computed style, the visibility property other
   * than 'hidden' or 'collapse' and non-empty bounding box. visibility ===
   * 'hidden' means the opposite of that.
   */
  #waitForVisibility = async (
    element: ElementHandle,
    abortController: AbortController
  ): Promise<void> => {
    await this.#waitForFunction(async () => {
      return this.#options.visibility === 'hidden'
        ? element.isHidden()
        : element.isVisible();
    }, abortController);
  };

  /**
   * If the element is a button, textarea, input or select, wait till the
   * element becomes enabled.
   */
  #waitForEnabled = async (
    element: ElementHandle,
    _abortController: AbortController
  ): Promise<void> => {
    await this.#page.waitForFunction(
      el => {
        if (['button', 'textarea', 'input', 'select'].includes(el.tagName)) {
          return !(el as HTMLInputElement).disabled;
        }
        return true;
      },
      {
        timeout: this.#options.operationTimeout,
      },
      element
    );
  };

  /**
   * Compares the bounding box of the element for two consecutive animation
   * frames and waits till they are the same.
   */
  #waitForStableBoundingBox = async (
    element: ElementHandle,
    abortController: AbortController
  ): Promise<void> => {
    function getClientRect() {
      return element.evaluate(el => {
        return new Promise<[BoundingBox, BoundingBox]>(resolve => {
          window.requestAnimationFrame(() => {
            const rect1 = el.getBoundingClientRect();
            window.requestAnimationFrame(() => {
              const rect2 = el.getBoundingClientRect();
              resolve([
                {
                  x: rect1.x,
                  y: rect1.y,
                  width: rect1.width,
                  height: rect1.height,
                },
                {
                  x: rect2.x,
                  y: rect2.y,
                  width: rect2.width,
                  height: rect2.height,
                },
              ]);
            });
          });
        });
      });
    }
    await this.#waitForFunction(async () => {
      const [rect1, rect2] = await getClientRect();
      return (
        rect1.x === rect2.x &&
        rect1.y === rect2.y &&
        rect1.width === rect2.width &&
        rect1.height === rect2.height
      );
    }, abortController);
  };

  async #performAction(
    payloadFn: (el: ElementHandle) => Promise<void>,
    actionOptions?: ActionOptions
  ) {
    const abortController =
      actionOptions?.abortController || new AbortController();

    function checkAbortController() {
      if (abortController?.signal.aborted) {
        throw new Error(`Locator was aborted.`);
      }
    }

    await this.#waitForFunction(
      async () => {
        try {
          checkAbortController();
          // 1. Select the element without visibility checks.
          const element = await this.#page.waitForSelector(this.#selector, {
            visible: false,
            timeout: this.#options.operationTimeout,
          });
          // Retry if no element is found.
          if (!element) {
            return false;
          }
          try {
            checkAbortController();
            // 2. Perform action specific checks.
            await Promise.all(
              actionOptions?.conditions.map(check => {
                return check(element, abortController);
              }) || []
            );
            checkAbortController();
            // 3. Perform the action
            this.emit(LocatorEmittedEvents.Action);
            await payloadFn(element);
            return true;
          } finally {
            element.dispose();
          }
        } catch (err) {
          if (isErrorLike(err)) {
            debugError(err);
            if (abortController?.signal.aborted) {
              return;
            }
            // Retry on all timeouts.
            if (err instanceof TimeoutError) {
              return false;
            }
            if (err instanceof AbortError) {
              // AbortErrors are silently ignored.
              return true;
            }
          }

          throw err;
        }
      },
      abortController,
      this.#options.timeout
    );
  }

  async click(clickOptions?: {
    delay?: number;
    button?: MouseButton;
    abortController?: AbortController;
  }): Promise<void> {
    await this.#performAction(
      async element => {
        await element.click(clickOptions);
      },
      {
        abortController: clickOptions?.abortController,
        conditions: [
          this.#ensureElementIsInTheViewport,
          this.#waitForVisibility,
          this.#waitForEnabled,
          this.#waitForStableBoundingBox,
        ],
      }
    );
  }
}
