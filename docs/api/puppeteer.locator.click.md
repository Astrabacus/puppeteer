---
sidebar_label: Locator.click
---

# Locator.click() method

#### Signature:

```typescript
class Locator {
  click(clickOptions?: {
    delay?: number;
    button?: MouseButton;
    abortController?: AbortController;
  }): Promise<void>;
}
```

## Parameters

| Parameter    | Type                                                                                                       | Description  |
| ------------ | ---------------------------------------------------------------------------------------------------------- | ------------ |
| clickOptions | { delay?: number; button?: [MouseButton](./puppeteer.mousebutton.md); abortController?: AbortController; } | _(Optional)_ |

**Returns:**

Promise&lt;void&gt;
