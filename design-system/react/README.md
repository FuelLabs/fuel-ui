<h1>⚡️ @fuel-ui/react</h1>

[![CI status][github-action-image]][github-action-url]
[![codecov][codecov-image]][codecov-url]
[![NPM version][npm-image]][npm-url]
[![NPM downloads][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/@fuel-ui/react.svg?style=flat-square
[npm-url]: http://npmjs.org/package/@fuel-ui/react
[github-action-image]: https://github.com/fuellabs/fuel-ui/workflows/%E2%9C%85%20test/badge.svg
[github-action-url]: https://github.com/fuellabs/fuel-ui/actions?query=workflow%3A%22%E2%9C%85+test%22
[codecov-image]: https://img.shields.io/codecov/c/github/fuellabs/fuel-ui/master.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/fuellabs/fuel-ui/branch/master
[download-image]: https://img.shields.io/npm/dm/@fuel-ui/react.svg?style=flat-square
[download-url]: https://npmjs.org/package/@fuel-ui/react

<br>

[![License](https://img.shields.io/github/license/fuellabs/fuel-ui)](https://github.com/fuellabs/fuel-ui)
[![Issues Open](https://img.shields.io/github/issues/fuellabs/fuel-ui)](https://github.com/fuellabs/fuel-ui)
[![Github Forks](https://img.shields.io/github/forks/fuellabs/fuel-ui)](https://github.com/fuellabs/fuel-ui)
[![Github Stars](https://img.shields.io/github/stars/fuellabs/fuel-ui)](https://github.com/fuellabs/fuel-ui)

<h2>📝&nbsp; Table of Content</h2>

- [🙋🏻&nbsp; Getting Started](#-getting-started)
- [📦&nbsp; Install](#-install)
  - [👨🏻‍💻&nbsp; Usage](#-usage)
  - [💅🏻&nbsp; Styling Components](#-styling-components)
- [💪🏻&nbsp; Contributing](#-contributing)
  - [📖&nbsp; Principles](#-principles)
  - [🏭&nbsp; Component Pattern](#-component-pattern)
  - [🕹&nbsp; Generating Components](#-generating-components)
  - [✅&nbsp; Testing Components](#-testing-components)
- [⚙️&nbsp; Dev Environment](#️-dev-environment)
  - [⌨️&nbsp; Local Commands](#️-local-commands)
  - [🛠&nbsp; Tools](#-tools)
    - [→ @fuel-ui/css](#-fuel-uicss)
    - [→ StorybookJS](#-storybookjs)
    - [→ RadixUI](#-radixui)
    - [→ Radix Icons](#-radix-icons)
    - [→ Radix Colors](#-radix-colors)
    - [→ XState](#-xstate)
- [💪🏻&nbsp; Contributing](#-contributing-1)
- [📜&nbsp; License](#-license)

---

## 🙋🏻&nbsp; Getting Started

Inside this package you'll found styled, very opiniated, acessible with high-quality user experience React components we're using inside as part of our design system inside our applications.

## 📦&nbsp; Install

```bash
$ yarn add @fuel-ui/react
```

```bash
$ pnpm install @fuel-ui/react
```

### 👨🏻‍💻&nbsp; Usage

First wrap your entire application using our `ThemeProvider` component

```jsx
import { ThemeProvider } from "@fuel-ui/react";

const Main = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
```

Then inside your app you can use as you want our component

```jsx
import { Button, Form, Icon, Input, Stack } from "@fuel-ui/react";

const App = () => {
  const [showing, setShowing] = useState(false);

  function toggle() {
    setShowing((s) => !s);
  }

  return (
    <Stack css={{ maxW: "400px" }}>
      <Form.Control isRequired>
        <Form.Label htmlFor="email">Email</Form.Label>
        <Input isFullWidth>
          <Input.ElementLeft element={<Icon icon="LockClosedIcon" />} />
          <Input.Field
            type={showing ? "text" : "password"}
            name="password"
            placeholder="Your password..."
          />
          <Input.ElementRight>
            <Button variant="outlined" onPress={toggle} css={{ mr: "-8px" }}>
              Show
            </Button>
          </Input.ElementRight>
        </Input>
        <Form.HelperText>Try a strong password</Form.HelperText>
        <Form.ErrorMessage>Password validation error</Form.ErrorMessage>
      </Form.Control>
    </Stack>
  );
};
```

### 💅🏻&nbsp; Styling Components

The best approach to style our component is by using `@fuel-ui/css` package. It's include all Stitches theme features and also our theme/tokens definitions.

You can simply create a `className` with it or use the `css` prop of our components:

```jsx
import { css } from "@fuel-ui/css";
import { Box } from "@fuel-ui/react";

const App = () => {
  <Box className={customStyle()} css={{ display: "flex" }}>
    Hello world
  </Box>;
};

const customStyle = css({
  alignItems: "center",
  justifyContent: "center",
  bg: "$accent11",
  px: "$4",
  textSize: "base",
});
```

---

## 💪🏻&nbsp; Contributing

Besides our main [Contribution Guide](../../CONTRIBUTING.md) it's very important you know about our code conventions and design principles if you want to contribute. Because of that we encourage you to read about all of these concepts and conventions bellow before start to develop or help here.

### 📖&nbsp; Principles

→ **Simplicity:** Strive to keep the component API fairly simple and show real world scenarios of using the component.<br>
→ **Composition:** Break down components into smaller parts with minimal props to keep complexity low, and compose them together. This will ensure that the styles and functionality are flexible and extensible.<br>
→ **Accessibility:** When creating a component, keep accessibility top of mind. This includes keyboard navigation, focus management, color contrast, voice over, and the correct `aria-*` attributes.<br>
→ **Dark Mode:** Make components dark mode compatible. Use our [darkTheme](../css/src/theme.ts) to handle styling [according to Stitches](https://stitches.dev/docs/theming#theme-specific-styles).<br>
→ **Naming Props:** We all know naming is the hardest thing in this industry. Generally, ensure a prop name is indicative of what it does. Boolean props should be named using auxiliary verbs such as does, has, is and should. For example, `Button` uses `isDisabled`, `isLoading`, etc.

### 🏭&nbsp; Component Pattern

There are two base props we have in all components: `as` and `css`. The `as` is very help if you want to change the base element of some component and the `css` prop will help you in order to change styles.

To make this available in some component inside our design system, we created a `createComponent` function. This function will work together with the React's `createElement` function and the Stitches `styled` to create all behavior we need.

Check this example of our `Box` component:

```tsx
import { cx, styled } from "@fuel-ui/css";
import { createElement } from "react";

import type { HTMLProps } from "../../utils";
import { createComponent } from "../../utils";

export type BoxProps = HTMLProps["div"];

const Root = styled("div");
export const Box = createComponent<BoxProps>(
  ({ className, children, ...props }) => {
    const classes = cx("fuel_box", className);
    return createElement(Root, { ...props, className: classes }, children);
  }
);
```

### 🕹&nbsp; Generating Components

If you don't want to copy and paste or create some snippet, you can use simply our generator by running:

```bash
$ pnpm add:component --name NameOfYourComponent
```

### ✅&nbsp; Testing Components

It's extremelly important that all components that has custom behaviors and settings are tested. So, we have `@fuel-ui/test-utils` package that will help you to test using React Testing Library with some cool patches and modifications for accessibility tests as well (this package is a copy of ChakraUI [test utils](https://github.com/chakra-ui/chakra-ui/blob/next/tooling/test-utils) package).

A base test of some component always include `a11y` test as first case:

```jsx
import { testA11y } from "@fuel-ui/test-utils";
import { MyComponent } from "./MyComponent";

describe("MyComponent", () => {
  it("a11y", async () => {
    await testA11y(<MyComponent>Hello world</MyComponent>);
  });
});
```

With test utils package you can run some triggers in order to test accessibility as well. Keyboard commands like `Tab` and `ArrowDown` is very easy by using `press` helper:

```jsx
import { press, render, screen } from "@fuel-ui/test-utils";
import { RadioGroup } from "./RadioGroup";

describe("RadioGroup", () => {
  it("should focus correctly", async () => {
    render(content);

    await press.Tab();
    expect(screen.getByLabelText("Default")).toHaveFocus();
    await press.ArrowDown();
    expect(screen.getByLabelText("Comfortable")).toHaveFocus();
    await press.ArrowDown();
    expect(screen.getByLabelText("Compact")).toHaveFocus();
  });
});
```

---

## ⚙️&nbsp; Dev Environment

This is the resources you'll need to know in order to run our dev environment.

### ⌨️&nbsp; Local Commands

Use this commands in order to run locally and have our dev environment setup in your machine.

| Command              | Description                                                       |
| -------------------- | ----------------------------------------------------------------- |
| `pnpm add:component` | Create a component based on our default [templates](./templates/) |
| `pnpm build:story`   | Build Storybook project                                           |
| `pnpm build`         | Run tsup for build using ESbuild                                  |
| `pnpm dev`           | Run Storybook in development mode                                 |
| `pnpm test`          | Run Jest with json output file option for Storybook addon         |

### 🛠&nbsp; Tools

There are several tools we're using inside our design system and all of them is important,
mainly because we really care about our user experience and we wan't to [achieve good
accessibility](../../ACCESSIBILITY.md) inside our components

#### → [@fuel-ui/css](../css)

This is an internal package containing all styles, theme and tokens definitions that we need
for entire monorepo and mainly here in our design system. Couple tools like [Stitches]() and
[Radix Colors]() are used inside this package. We're encourage you to check it also.

#### → [StorybookJS](https://storybook.js.org/)

This project utilizes Storybook for component development with some [really cool addons](./.storybook/main.js) to help us to achieve accessibility, be able to cover user experience use cases in our and have a good documentation of each component.

#### → [RadixUI](https://www.radix-ui.com/)

We are using Radix as base components extensively here:

> Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience. You can use their components either as the base layer of your design system, or adopt them incrementally. We're

#### → [Phosphor Icons](https://phosphoricons.com/)

As icon set, we're using Phosphor Icons here. Phosphor Icons is a flexible icon family for interfaces, diagrams, presentations — whatever, really.

#### → [Radix Colors](https://www.radix-ui.com/colors)

We also use Radix Colors inside the `@fuel-ui/css` package. So, you we can check all colors inside the [package folder](../css/src).

#### → [XState](https://xstate.js.org/)

We also use XState as state management internally.

## 💪🏻&nbsp; Contributing

Feel like contributing? That's awesome! We have a [contributing guide](../../CONTRIBUTING.md) to help guide you.

## 📜&nbsp; License

The primary license for this repo is `Apache 2.0`, see [`LICENSE`](./LICENSE).
