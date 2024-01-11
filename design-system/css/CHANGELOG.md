# @fuel-ui/css

## 0.22.0

## 0.21.1

## 0.21.0

### Minor Changes

- chore: update packages version, by [@luizstacio](https://github.com/luizstacio) (See [#321](https://github.com/FuelLabs/fuel-ui/pull/321))

## 0.20.1

## 0.20.0

## 0.19.1

### Patch Changes

- 🐞 Fix: adjust semantic colors related to focus, by [@pedronauck](https://github.com/pedronauck) (See [#312](https://github.com/FuelLabs/fuel-ui/pull/312))

## 0.19.0

## 0.18.4

## 0.18.3

## 0.18.2

### Patch Changes

- 🐞 Fix: adjust color scales on semantics according Radix, by [@pedronauck](https://github.com/pedronauck) (See [#304](https://github.com/FuelLabs/fuel-ui/pull/304))

## 0.18.1

## 0.18.0

### Minor Changes

- ✨ Feat: add new package `@fuel-ui/icon` package to improve performance when loading icons. Using this new approach icons are loaded via svg sprite than import all inside the bundle, by [@pedronauck](https://github.com/pedronauck) (See [#289](https://github.com/FuelLabs/fuel-ui/pull/289))

### Patch Changes

- Chore: adjust light and dark theme colors and tokens, by [@pedronauck](https://github.com/pedronauck) (See [#294](https://github.com/FuelLabs/fuel-ui/pull/294))
- Chore: change `Drawer` to use the new theme system, by [@tomiiide](https://github.com/tomiiide) (See [#273](https://github.com/FuelLabs/fuel-ui/pull/273))
- Chore: change `ContentLoader` to use the new theme system, by [@tomiiide](https://github.com/tomiiide) (See [#266](https://github.com/FuelLabs/fuel-ui/pull/266))

## 0.17.0

## 0.16.2

### Patch Changes

- Add a changeset in order to get a dev release on npm, by [@matt-user](https://github.com/matt-user) (See [#282](https://github.com/FuelLabs/fuel-ui/pull/282))

## 0.16.1

## 0.16.0

## 0.15.0

## 0.14.2

### Patch Changes

- 🐞 Fix: mark stitches package as external for bundling, by [@pedronauck](https://github.com/pedronauck) (See [#242](https://github.com/FuelLabs/fuel-ui/pull/242))

## 0.14.1

### Patch Changes

- 🐞 Fix: add design-tokens package with access as public, by [@github-actions](https://github.com/apps/github-actions) (See [#235](https://github.com/FuelLabs/fuel-ui/pull/235))

## 0.14.0

### Minor Changes

- Chore: Forked stitches packages to improve typing and class generation.
  Feat: Added a new flexible and custom theme system. [Read the RFC for all details](https://github.com/FuelLabs/fuel-ui/issues/224) and [check out an example of usage](https://github.com/FuelLabs/fuel-ui/tree/feat/theme-system/examples/custom-theme).
  Feat: Updated `Flex`, `BoxCentered`, `Grid`, and `Stack` components to be used within `Box` as namespaced components _[BREAKING CHANGE]_:
  ```tsx
  import { Box } from '@fuel-ui/react';
  function App() {
    return <Box.Flex>Hello world</Box.Flex>;
  }
  ```
  Feat: Introduced a new polymorphic components system where as props automatically adjust prop typings. Any HTML element can be used in the component prop. For example, using an a tag will render an anchor:
  ```tsx
  import { Button } from '@fuel-ui/react';
  import { IconExternalLink } from '@tabler/icons-react';
  function Demo() {
    return (
      <Button
        component="a"
        href="#"
        variant="outlined"
        leftIcon={<IconExternalLink size={18} />}
      >
        Open in new tab
      </Button>
    );
  }
  ```
  Feat: Refined the default light theme for better clarity and simplicity:
  ```tsx
  import {
    ThemeProvider,
    darkTheme,
    lightTheme,
    useFuelTheme,
  } from '@fuel-ui/react';
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
  ````tsx
  import { Button } from '@fuel-ui/react'
  function Demo() {
  return <Button intent='base'>Cancel</Button>
  }
  ```, by [@pedronauck](https://github.com/pedronauck) (See [#228](https://github.com/FuelLabs/fuel-ui/pull/228))
  ````

## 0.13.0

### Minor Changes

- ✨ Feat: minimal set of adjustments to have a new brand look, by [@pedronauck](https://github.com/pedronauck) (See [#219](https://github.com/FuelLabs/fuel-ui/pull/219))

## 0.12.4

## 0.12.3

## 0.12.2

## 0.12.1

## 0.12.0

## 0.11.0

### Minor Changes

- ✨ Feat: add new <Pagination> component. Check inside then `Pagination.stories.tsx` to see how to use it, by [@pedronauck](https://github.com/pedronauck) (See [#189](https://github.com/FuelLabs/fuel-ui/pull/189))

## 0.10.2

### Patch Changes

- 🐞 Fix(react): `<InputAmount>` now discount fee when hit max button and also format balance units to don't break layout, by [@pedronauck](https://github.com/pedronauck) (See [#184](https://github.com/FuelLabs/fuel-ui/pull/184))

## 0.10.1

## 0.10.0

## 0.9.3

## 0.9.2

## 0.9.1

### Patch Changes

- 🐞 Fix: packages export definition, by [@pedronauck](https://github.com/pedronauck) (See [#159](https://github.com/FuelLabs/fuel-ui/pull/159))

## 0.9.0

## 0.8.0

## 0.7.0

## 0.6.0

## 0.5.0

## 0.4.0

## 0.3.0

## 0.2.0

### Minor Changes

- ✨ Feat: accept a theme object for custom theme on `<ThemeProvider>`, by [@pedronauck](https://github.com/pedronauck) (See [#105](https://github.com/FuelLabs/fuel-ui/pull/105))
- ✨ Feat: expose a `cssObj` function that help on css objects creation, by [@pedronauck](https://github.com/pedronauck) (See [#105](https://github.com/FuelLabs/fuel-ui/pull/105))

### Patch Changes

- 💅🏻 Style: general adjustments according to Figma design specs, by [@pedronauck](https://github.com/pedronauck) (See [#105](https://github.com/FuelLabs/fuel-ui/pull/105))

## 0.0.2

### Patch Changes

- Add changesets to monorepo, by [@pedronauck](https://github.com/pedronauck) (See [#46](https://github.com/FuelLabs/fuel-ui/pull/46))
