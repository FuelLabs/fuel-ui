---
'@fuel-ui/react': minor
'@fuel-ui/test-utils': minor
'@fuel-ui/css': minor
'@fuel-ui/config': minor
---

Feat: add new flexible and custom theme system [(all details about the RFC here)](https://github.com/FuelLabs/fuel-ui/issues/224) and an [example of usage here](https://github.com/FuelLabs/fuel-ui/tree/feat/theme-system/examples/custom-theme)
Feat: now `Flex`, `BoxCentered`, `Grid` and `Stack` can be used within `Box` as namespaced components:
```tsx
import { Box } from '@fuel-ui/react'

function App() {
  return (
    <Box.Flex>Hello world</Box.Flex>
  )
}
```
Feat: new polymorphic components system. Now `as` props automatically adjust props typing.
