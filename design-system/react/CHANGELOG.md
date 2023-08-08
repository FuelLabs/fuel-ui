# @fuel-ui/react

## 0.18.1

### Patch Changes

- ✨ Feat: add variants back to the card component, by [@matt-user](https://github.com/matt-user) (See [#296](https://github.com/FuelLabs/fuel-ui/pull/296))

## 0.18.0

### Minor Changes

- ✨ Feat: now, by default the `asChild` prop on `Dropdown.Trigger` is set to `false`. So, if you are using this component target a child as trigger, you need to pass `asChild` to the `Dropdown.Trigger` in order to make it work, by [@tomiiide](https://github.com/tomiiide) (See [#276](https://github.com/FuelLabs/fuel-ui/pull/276))
- Breaking change: remove `Card` variant prop, by [@pedronauck](https://github.com/pedronauck) (See [#294](https://github.com/FuelLabs/fuel-ui/pull/294))
- ✨ Feat: add new package `@fuel-ui/icon` package to improve performance when loading icons. Using this new approach icons are loaded via svg sprite than import all inside the bundle, by [@pedronauck](https://github.com/pedronauck) (See [#289](https://github.com/FuelLabs/fuel-ui/pull/289))

### Patch Changes

- Chore: adjust light and dark theme colors and tokens, by [@pedronauck](https://github.com/pedronauck) (See [#294](https://github.com/FuelLabs/fuel-ui/pull/294))
- Chore: change `Drawer` to use the new theme system, by [@tomiiide](https://github.com/tomiiide) (See [#273](https://github.com/FuelLabs/fuel-ui/pull/273))
- Chore: adjust `Dialog` to use the new theme system, by [@tomiiide](https://github.com/tomiiide) (See [#269](https://github.com/FuelLabs/fuel-ui/pull/269))
- 🐞 Fix: allow custom sizes for generated avatars, by [@matt-user](https://github.com/matt-user) (See [#293](https://github.com/FuelLabs/fuel-ui/pull/293))
- Chore: change `ContentLoader` to use the new theme system, by [@tomiiide](https://github.com/tomiiide) (See [#266](https://github.com/FuelLabs/fuel-ui/pull/266))

## 0.17.0

### Minor Changes

- 🐞 Fix Card and Card.Item layout, by [@LuizAsFight](https://github.com/LuizAsFight) (See [#287](https://github.com/FuelLabs/fuel-ui/pull/287))

## 0.16.2

### Patch Changes

- 🐞 Fix card list item to use upgraded design system functions, by [@matt-user](https://github.com/matt-user) (See [#285](https://github.com/FuelLabs/fuel-ui/pull/285))
- Add a changeset in order to get a dev release on npm, by [@matt-user](https://github.com/matt-user) (See [#282](https://github.com/FuelLabs/fuel-ui/pull/282))

## 0.16.1

### Patch Changes

- Change fonts links, by [@luizstacio](https://github.com/luizstacio) (See [#272](https://github.com/FuelLabs/fuel-ui/pull/272))

## 0.16.0

### Minor Changes

- Split Strength Indicator from PasswordStrength component, by [@luizstacio](https://github.com/luizstacio) (See [#268](https://github.com/FuelLabs/fuel-ui/pull/268))

### Patch Changes

- Upgrade the CardList components to the new API, by [@tomiiide](https://github.com/tomiiide) (See [#262](https://github.com/FuelLabs/fuel-ui/pull/262))
- Upgrate the AlertDialog components to new API, by [@tomiiide](https://github.com/tomiiide) (See [#257](https://github.com/FuelLabs/fuel-ui/pull/257))

## 0.15.0

### Minor Changes

- ✨ Feat: use [TablerIcons](https://tablericons.io) instead of PhosphorIcons.
  ⚠️ This is a huge breaking change, since there are different icon names across the sets, by [@pedronauck](https://github.com/pedronauck) (See [#251](https://github.com/FuelLabs/fuel-ui/pull/251))

### Patch Changes

- 🐞 Fix: adjust `setTheme` inside the `useFuelTheme` to just accept strings representing the themes passed to the themes object within `<ThemeProvider>`, by [@pedronauck](https://github.com/pedronauck) (See [#248](https://github.com/FuelLabs/fuel-ui/pull/248))

## 0.14.2

### Patch Changes

- 🐞 Fix: mark stitches package as external for bundling, by [@pedronauck](https://github.com/pedronauck) (See [#242](https://github.com/FuelLabs/fuel-ui/pull/242))

## 0.14.1

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

### Patch Changes

- 🐞 Fix: PasswordStrengh component style was getting an wrong background, by [@pedronauck](https://github.com/pedronauck) (See [#233](https://github.com/FuelLabs/fuel-ui/pull/233))

## 0.13.0

### Minor Changes

- ✨ Feat: minimal set of adjustments to have a new brand look, by [@pedronauck](https://github.com/pedronauck) (See [#219](https://github.com/FuelLabs/fuel-ui/pull/219))

## 0.12.4

### Patch Changes

- ✨ feat: add more symbols to passwordStrength logic, by [@LuizAsFight](https://github.com/LuizAsFight) (See [#214](https://github.com/FuelLabs/fuel-ui/pull/214))

## 0.12.3

### Patch Changes

- Trigger onClose when isOpen is controlled from a upper state, by [@luizstacio](https://github.com/luizstacio) (See [#207](https://github.com/FuelLabs/fuel-ui/pull/207))

## 0.12.2

### Patch Changes

- 🐞 fix: avoid Popover from PasswordStrength component to override input focus component, by [@LuizAsFight](https://github.com/LuizAsFight) (See [#202](https://github.com/FuelLabs/fuel-ui/pull/202))

## 0.12.1

### Patch Changes

- Add pasword security against common passwords, by [@LuizAsFight](https://github.com/LuizAsFight) (See [#199](https://github.com/FuelLabs/fuel-ui/pull/199))

## 0.12.0

### Minor Changes

- 🐞 fix: export typing in Focus components, by [@pedronauck](https://github.com/pedronauck) (See [#194](https://github.com/FuelLabs/fuel-ui/pull/194))

## 0.11.0

### Minor Changes

- refact(Drawer): naming change from overlay to underlay. remove unnecessary <Box> wrapping children, by [@LuizAsFight](https://github.com/LuizAsFight) (See [#190](https://github.com/FuelLabs/fuel-ui/pull/190))
- ✨ Feat: add new <Pagination> component. Check inside then `Pagination.stories.tsx` to see how to use it, by [@pedronauck](https://github.com/pedronauck) (See [#189](https://github.com/FuelLabs/fuel-ui/pull/189))

### Patch Changes

- 🐞 Fix: add a typescript typing reference for FocusScope using @react-aria/focus, by [@pedronauck](https://github.com/pedronauck) (See [#191](https://github.com/FuelLabs/fuel-ui/pull/191))

## 0.10.2

### Patch Changes

- 🐞 Fix(react): `<InputAmount>` now discount fee when hit max button and also format balance units to don't break layout, by [@pedronauck](https://github.com/pedronauck) (See [#184](https://github.com/FuelLabs/fuel-ui/pull/184))

## 0.10.1

### Patch Changes

- Add exports for InputAmount and ContentLoader, by [@luizstacio](https://github.com/luizstacio) (See [#182](https://github.com/FuelLabs/fuel-ui/pull/182))

## 0.10.0

### Minor Changes

- Add InputAmount enabling better handling input of asset amounts.
  Add ContentLoader enabling creation of loading placeholders for components, by [@luizstacio](https://github.com/luizstacio) (See [#181](https://github.com/FuelLabs/fuel-ui/pull/181))

## 0.9.3

### Patch Changes

- Chore: Make `<Copyable />` iconProps optional, by [@LuizAsFight](https://github.com/LuizAsFight) (See [#173](https://github.com/FuelLabs/fuel-ui/pull/173))
- 🐞 Fix: Drawer required props and update dependencies, by [@pedronauck](https://github.com/pedronauck) (See [#175](https://github.com/FuelLabs/fuel-ui/pull/175))
- Chore: Adjust component styles to use `:focus-visible` instead of `:focus`, by [@pedronauck](https://github.com/pedronauck) (See [#175](https://github.com/FuelLabs/fuel-ui/pull/175))
- 🐞 Fix: Adjust <Dialog /> to work without <Dialog.Trigger />, by [@pedronauck](https://github.com/pedronauck) (See [#174](https://github.com/FuelLabs/fuel-ui/pull/174))

## 0.9.2

### Patch Changes

- 🐞 Fix: Drawer required props and update dependencies, by [@pedronauck](https://github.com/pedronauck) (See [#168](https://github.com/FuelLabs/fuel-ui/pull/168))

## 0.9.1

### Patch Changes

- 🐞 Fix: packages export definition, by [@pedronauck](https://github.com/pedronauck) (See [#159](https://github.com/FuelLabs/fuel-ui/pull/159))
- 🐞 fixed copyable icon padding, by [@josevitordaltoe](https://github.com/josevitordaltoe) (See [#157](https://github.com/FuelLabs/fuel-ui/pull/157))
- 🐞 Fix: add solution to remove needing of !important, by [@pedronauck](https://github.com/pedronauck) (See [#150](https://github.com/FuelLabs/fuel-ui/pull/150))

## 0.9.0

### Minor Changes

- Change avatar genereted sizes, by [@luizstacio](https://github.com/luizstacio) (See [#147](https://github.com/FuelLabs/fuel-ui/pull/147))

## 0.8.0

### Minor Changes

- ✨ feat(new-avatar-size): adds new avatar size, by [@LFSCamargo](https://github.com/LFSCamargo) (See [#144](https://github.com/FuelLabs/fuel-ui/pull/144))
- ✨ Feat: add new `<List />` component. See how to use it inside the component story, by [@pedronauck](https://github.com/pedronauck) (See [#142](https://github.com/FuelLabs/fuel-ui/pull/142))
- ✨ Feat: add `hideCloseButton` prop on `<DialogContent>`, by [@pedronauck](https://github.com/pedronauck) (See [#145](https://github.com/FuelLabs/fuel-ui/pull/145))

### Patch Changes

- 🐞 Fix: Remove FocusScope inside of Menu component and add autoFocus manually, by [@pedronauck](https://github.com/pedronauck) (See [#139](https://github.com/FuelLabs/fuel-ui/pull/139))
- 🐞 Fix: export MenuItemProps type, by [@pedronauck](https://github.com/pedronauck) (See [#141](https://github.com/FuelLabs/fuel-ui/pull/141))

## 0.7.0

### Minor Changes

- ✨ Feat: add new `<Drawer />` component. See `Drawer.stories` for further information about usage, by [@pedronauck](https://github.com/pedronauck) (See [#135](https://github.com/FuelLabs/fuel-ui/pull/135))
- ✨ Feat: add `<Dropdown>` component. See `Dropdown.stories` for further information on how to use it, by [@pedronauck](https://github.com/pedronauck) (See [#137](https://github.com/FuelLabs/fuel-ui/pull/137))

### Patch Changes

- 🐞 Fix: Dropdown width on dropdown story, by [@pedronauck](https://github.com/pedronauck) (See [#138](https://github.com/FuelLabs/fuel-ui/pull/138))

## 0.6.0

### Minor Changes

- ✨ Feat: add `<Avatar.Generated>` component. This component will generated an unique avatar svg image based in a hash value
  ````jsx
  <Avatar.Generated hash="0x760a9e947de58fbf133a1d0ec97ae9aa18adfe71" />
  ```, by [@pedronauck](https://github.com/pedronauck) (See [#127](https://github.com/FuelLabs/fuel-ui/pull/127))
  ````

### Patch Changes

- ✨ feat(AvatarGenerated): add `background` prop; apply rounded aspect, by [@LuizAsFight](https://github.com/LuizAsFight) (See [#131](https://github.com/FuelLabs/fuel-ui/pull/131))
- 🐞 Fix: improve typings for \_unstable_createComponent function, by [@pedronauck](https://github.com/pedronauck) (See [#134](https://github.com/FuelLabs/fuel-ui/pull/134))
- 🐞 Fix: use browser native Clipboard API instead of ReactUse on `<Clipboard>` component, by [@pedronauck](https://github.com/pedronauck) (See [#126](https://github.com/FuelLabs/fuel-ui/pull/126))

## 0.5.0

### Minor Changes

- ✨ Feat: add `<InputPassword>` component. This component already have element configured for a input password like a button to toggle password and a lock icon on left.
  ```jsx
  <InputPassword name="password" placeholder="Type your password">
  ```
- ✨ Feat: add new `<FuelLogo>` component, by [@pedronauck](https://github.com/pedronauck) (See [#123](https://github.com/FuelLabs/fuel-ui/pull/123))

### Patch Changes

- 🐞 Fix: remove usage of `asChild` on `<Focus.ArrowNavigator>`, by [@pedronauck](https://github.com/pedronauck) (See [#118](https://github.com/FuelLabs/fuel-ui/pull/118))
- 🐞 Fix: use `onClick` to fix `asChild` prop dilling on `<Button>`, by [@pedronauck](https://github.com/pedronauck) (See [#118](https://github.com/FuelLabs/fuel-ui/pull/118))

## 0.4.0

### Minor Changes

- ✨ Feat: add new `<Input.Number>` component that uses `react-number-format` under the hood to create a full numeric type input (all `react-number-format` props are allowed on this component)
  ```jsx
  <Input>
    <Input.Number name="amount" placeholder="0.0" inputMode="decimal" />
  </Input>
  ```

## 0.3.0

### Minor Changes

- ✨ Feat: add new `<CardList>` component, basically a list of cards that can be clickable and have right elements as actions.
  ```jsx
  <CardList {...args} css={{ maxW: '$md' }}>
    <CardList.Item isActive>
      <Avatar
        {...args}
        size="sm"
        name="Colm Tuite"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      />
      <Heading as="h6" css={{ margin: 0 }}>
        Colm Tuite
      </Heading>
    </CardList.Item>
  </CardList>
  ```

### Patch Changes

- 🐞 Fix: add contentProps and arrowProps for `<Popover>`, by [@pedronauck](https://github.com/pedronauck) (See [#108](https://github.com/FuelLabs/fuel-ui/pull/108))
- 🐞 Fix: resolve props passed as handlers for Button component, by [@pedronauck](https://github.com/pedronauck) (See [#112](https://github.com/FuelLabs/fuel-ui/pull/112))
- 🐞 Fix: add css prop for `<Menu>`, by [@pedronauck](https://github.com/pedronauck) (See [#108](https://github.com/FuelLabs/fuel-ui/pull/108))

## 0.2.0

### Minor Changes

- ✨ Feat: add a custom prop on ThemeProvider to don't load fonts by default, by [@pedronauck](https://github.com/pedronauck) (See [#105](https://github.com/FuelLabs/fuel-ui/pull/105))
- ✨ Feat: use Phosphor icons instead of Radix Icons, by [@pedronauck](https://github.com/pedronauck) (See [#105](https://github.com/FuelLabs/fuel-ui/pull/105))
- ✨ Feat: accept a theme object for custom theme on `<ThemeProvider>`, by [@pedronauck](https://github.com/pedronauck) (See [#105](https://github.com/FuelLabs/fuel-ui/pull/105))

### Patch Changes

- 🐞 Fix: check if window is undefined for SSR purposes, by [@pedronauck](https://github.com/pedronauck) (See [#105](https://github.com/FuelLabs/fuel-ui/pull/105))
- 🐞 Fix: add value prop for `<Copyable>`, by [@pedronauck](https://github.com/pedronauck) (See [#105](https://github.com/FuelLabs/fuel-ui/pull/105))
- 💅🏻 Style: general adjustments according to Figma design specs, by [@pedronauck](https://github.com/pedronauck) (See [#105](https://github.com/FuelLabs/fuel-ui/pull/105))
- 🐞 Fix: pass machine for useMachine on ThemeProvider in a right way, by [@pedronauck](https://github.com/pedronauck) (See [#105](https://github.com/FuelLabs/fuel-ui/pull/105))
- Updated dependencies (See [#105](https://github.com/FuelLabs/fuel-ui/pull/105), [#105](https://github.com/FuelLabs/fuel-ui/pull/105), and [#105](https://github.com/FuelLabs/fuel-ui/pull/105))
  - @fuel-ui/css@0.2.0
  - @fuels/jest@0.2.0

## 0.1.1

### Patch Changes

- 🐞 Fix: export missing FocusScopeProps on Focus component, by [@pedronauck](https://github.com/pedronauck) (See [#102](https://github.com/FuelLabs/fuel-ui/pull/102))

## 0.1.0

### Minor Changes

- ✨ Feat: add `<Menu />` component using React Aria [useMenu()](https://react-spectrum.adobe.com/react-aria/useMenu.html) as base to create it
  ```jsx
  <Menu autoFocus disabledKeys={['edit']} aria-label="Actions">
    <Menu.Item key="settings" textValue="Settings">
      Settings
    </Menu.Item>
    <Menu.Item key="trash" textValue="Delete">
      Delete
    </Menu.Item>
    <Menu.Item key="edit" textValue="Edit">
      Edit
    </Menu.Item>
  </Menu>
  ```
- ✨ Feat: add a `<Image />` component, by [@pedronauck](https://github.com/pedronauck) (See [#89](https://github.com/FuelLabs/fuel-ui/pull/89))
- ✨ Feat: add new `<HelperIcon />`, a component that will show a helper icon with a Tooltip included
  ```jsx
  <HelperIcon message="This is a helper message">Some information</HelperIcon>
  ```
- ✨ Feat: add `<Focus.ArrowNavigator />` component, a component that create a focus scope and add focus navigation using arrows automatically on children.
  ```jsx
  <Focus.ArrowNavigator asChild autoFocus>
    <Stack gap="$3" direction="row">
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </Stack>
  </Focus.ArrowNavigator>
  ```
- ✨ Feat: add new `<Accordion />` component using [Radix Accordion](https://www.radix-ui.com/docs/primitives/components/accordion) as base component
  ```jsx
  <Accordion {...args} type="single" defaultValue="item-1" collapsible>
    <Accordion.Item value="item-1">
      <Accordion.Trigger>What&apos; Fuel?</Accordion.Trigger>
      <Accordion.Content>
        The fastest execution modular blokchain
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-2">
      <Accordion.Trigger>Is really fast?</Accordion.Trigger>
      <Accordion.Content>Yes, blazingly fast!</Accordion.Content>
    </Accordion.Item>
  </Accordion>
  ```
- ✨ Feat: add new `<ButtonGroup />` component
  ```jsx
  <ButtonGroup {...args} color="blue" size="sm">
    <Button>First</Button>
    <Button leftIcon="Calendar">Second</Button>
    <Button>Third</Button>
  </ButtonGroup>
  ```
- ✨ Feat: add new `<Copyable />` component. A component that adds a copy to clipboard icon and handler in a text.
  ```jsx
  <Copyable>Some value</Copyable>
  ```
- ✨ Feat: add new `<Switch />` component using [Radix Switch](https://www.radix-ui.com/docs/primitives/components/switch) as base
  ```jsx
  <Flex align="center">
    <Form.Label htmlFor="s1">Label</Form.Label>
    <Switch defaultChecked id="s1" {...args} />
  </Flex>
  ```
- ✨ Feat: add new `toast()` function that shows a toast using [react-hot-toast](https://react-hot-toast.com/) behind the scenes. It also includes `<ToastProvider />` in our `<ThemeProvider />` by default.
  ```jsx
  import { Button, toast } from '@fuel-ui/react';
  function App() {
    return <Button onPress={() => toast('Hello world!')}>Show toast</Button>;
  }
  ```

### Patch Changes

- 🐞 Fix: adjust focus active style on buttons inside `<ButtonGroup />`, by [@pedronauck](https://github.com/pedronauck) (See [#97](https://github.com/FuelLabs/fuel-ui/pull/97))

## 0.0.2

### Patch Changes

- Add changesets to monorepo, by [@pedronauck](https://github.com/pedronauck) (See [#46](https://github.com/FuelLabs/fuel-ui/pull/46))
- Add a new `<Popover>` component using Radix as base component
  ```jsx
  <Popover content={<div>Hello world</div>}>
    <Button>Click here</Button>
  </Popover>
  ```
- Add a new component `<AspectRatio>` for embedding images with a pre-defined ratio
  ```jsx
  <AspectRatio ratio={16 / 9} {...args}>
    <img
      className={styles.img()}
      src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
      alt="Landscape photo by Tobias Tullius"
    />
  </AspectRatio>
  ```
- ⚠️ Fix default <Button> props when merge with useButton() props using mergeProps from react-aria, by [@pedronauck](https://github.com/pedronauck) (See [#82](https://github.com/FuelLabs/fuel-ui/pull/82))
- Updated dependencies (See [#46](https://github.com/FuelLabs/fuel-ui/pull/46))
  - @fuels/jest@0.0.2
  - @fuel-ui/css@0.0.2
