---
'@fuel-ui/react': minor
'@fuel-ui/test-utils': minor
'@fuel-ui/css': minor
'@fuel-ui/config': minor
---

Chore: Forked stitches packages to improve typing and class generation.

Feat: Added a new flexible and custom theme system. [Read the RFC for all details](https://github.com/FuelLabs/fuel-ui/issues/224) and [check out an example of usage](https://github.com/FuelLabs/fuel-ui/tree/feat/theme-system/examples/custom-theme).

Feat: Updated `Flex`, `BoxCentered`, `Grid`, and `Stack` components to be used within `Box` as namespaced components *[BREAKING CHANGE]*:
```tsx
import { Box } from '@fuel-ui/react'

function App() {
  return (
    <Box.Flex>Hello world</Box.Flex>
  )
}
```
Feat: Introduced a new polymorphic components system where as props automatically adjust prop typings. Any HTML element can be used in the component prop. For example, using an a tag will render an anchor:
```tsx
import { Button } from '@fuel-ui/react';
import { IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <Button component="a" href="#" variant="outlined" leftIcon={<IconExternalLink size={18} />}>
      Open in new tab
    </Button>
  );
}
```

Feat: Refined the default light theme for better clarity and simplicity:
```tsx
import { ThemeProvider, darkTheme, lightTheme, useFuelTheme } from '@fuel-ui/react'

function ThemeWrapper(props: any) {
  const isDark = useSomeHookToDetectIsDark();
  const { setTheme } = useFuelTheme();

  useEffect(() => {
    setTheme(isDark ? darkTheme : lightTheme);
  }, [isDark]);

  return <ThemeProvider>{props.children}</ThemeProvider>;
}
```
Feat: Added new design tokens in this release. All color tokens are now auto-generated using the `design-system/tokens `project, based on the [Stitches design tokens pattern](https://stitches.dev/docs/tokens) and [Radix Colors](https://www.radix-ui.com/colors). Important notes about the new tokens:

- Always reference the semantic value of a token when using a color, e.g., use `$intentsPrimary9` instead of `$green9`.
- Semantic colors are available for all necessary layer styles and inputs. A `layer` mixin has been introduced to simplify token usage (see `Button/styles.ts` implementation for more details).
- New tokens are generated in the `design-tokens/tokens/build/tokens-raw.ts` file after running `pnpm build` inside the package.
- Understanding and following the new token system is crucial for easy light/dark theme switching.
- The number of colors and variations in `Button`, `Tag`, and `Badge` has been reduced to only include design system intents.

Chore: Removed `color` prop from `Button` and all derived/related components. Use `intent` instead.

```tsx
import { Button } from '@fuel-ui/react'

function Demo() {
  return <Button intent='base'>Cancel</Button>
}
```
