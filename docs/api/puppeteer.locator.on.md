---
sidebar_label: Locator.on
---

# Locator.on() method

#### Signature:

```typescript
class Locator {
  on<K extends keyof LocatorEventObject>(
    eventName: K,
    handler: (event: LocatorEventObject[K]) => void
  ): Locator;
}
```

## Parameters

| Parameter | Type                                                                             | Description |
| --------- | -------------------------------------------------------------------------------- | ----------- |
| eventName | K                                                                                |             |
| handler   | (event: [LocatorEventObject](./puppeteer.locatoreventobject.md)\[K\]) =&gt; void |             |

**Returns:**

[Locator](./puppeteer.locator.md)
