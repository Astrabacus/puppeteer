---
sidebar_label: LocatorOptions
---

# LocatorOptions interface

#### Signature:

```typescript
export interface LocatorOptions
```

## Properties

| Property         | Modifiers | Type                  | Description                                                                                                                                                                                                                                                                                      | Default |
| ---------------- | --------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| operationTimeout |           | number                | Timeout for individual operations inside the locator. On errors the operation is retried as long as [LocatorOptions.timeout](./puppeteer.locatoroptions.timeout.md) is not exceeded. This timeout should be generally much lower as locating an element means multiple asynchronious operations. |         |
| timeout          |           | number                | Total timeout for the entire locator operation.                                                                                                                                                                                                                                                  |         |
| visibility       |           | 'hidden' \| 'visible' | Whether to wait for the element to be <code>visible</code> or <code>hidden</code>.                                                                                                                                                                                                               |         |
