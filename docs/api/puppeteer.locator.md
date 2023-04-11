---
sidebar_label: Locator
---

# Locator class

Locators describe a strategy of locating elements and performing an action on them. If the action fails because the element are not ready for the action, the whole operation is retried.

#### Signature:

```typescript
export declare class Locator extends EventEmitter
```

**Extends:** [EventEmitter](./puppeteer.eventemitter.md)

## Constructors

| Constructor                                                                    | Modifiers | Description                                                 |
| ------------------------------------------------------------------------------ | --------- | ----------------------------------------------------------- |
| [(constructor)(page, selector, options)](./puppeteer.locator._constructor_.md) |           | Constructs a new instance of the <code>Locator</code> class |

## Methods

| Method                                                  | Modifiers | Description |
| ------------------------------------------------------- | --------- | ----------- |
| [click(clickOptions)](./puppeteer.locator.click.md)     |           |             |
| [off(eventName, handler)](./puppeteer.locator.off.md)   |           |             |
| [on(eventName, handler)](./puppeteer.locator.on.md)     |           |             |
| [once(eventName, handler)](./puppeteer.locator.once.md) |           |             |
