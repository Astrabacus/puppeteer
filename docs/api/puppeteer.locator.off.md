---
sidebar_label: Locator.off
---

# Locator.off() method

#### Signature:

```typescript
class Locator {
  off<K extends keyof LocatorEventObject>(
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
