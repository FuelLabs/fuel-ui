<h1>⚡️ @fuel-ui/css</h1>

[![CI status][github-action-image]][github-action-url]
[![codecov][codecov-image]][codecov-url]
[![NPM version][npm-image]][npm-url]
[![NPM downloads][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/@fuel-ui/css.svg?style=flat-square
[npm-url]: http://npmjs.org/package/@fuel-ui/css
[github-action-image]: https://github.com/fuellabs/fuel-ui/workflows/%E2%9C%85%20test/badge.svg
[github-action-url]: https://github.com/fuellabs/fuel-ui/actions?query=workflow%3A%22%E2%9C%85+test%22
[codecov-image]: https://img.shields.io/codecov/c/github/fuellabs/fuel-ui/master.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/fuellabs/fuel-ui/branch/master
[download-image]: https://img.shields.io/npm/dm/@fuel-ui/css.svg?style=flat-square
[download-url]: https://npmjs.org/package/@fuel-ui/css

<br>

[![License](https://img.shields.io/github/license/fuellabs/fuel-ui)](https://github.com/fuellabs/fuel-ui)
[![Issues Open](https://img.shields.io/github/issues/fuellabs/fuel-ui)](https://github.com/fuellabs/fuel-ui)
[![Github Forks](https://img.shields.io/github/forks/fuellabs/fuel-ui)](https://github.com/fuellabs/fuel-ui)
[![Github Stars](https://img.shields.io/github/stars/fuellabs/fuel-ui)](https://github.com/fuellabs/fuel-ui)

<h2>📝&nbsp; Table of Content</h2>

- [🙋🏻&nbsp; Getting Started](#-getting-started)
- [📦&nbsp; Install](#-install)
  - [👨🏻‍💻&nbsp; Usage](#-usage)
- [💪🏻&nbsp; Contributing](#-contributing)
- [📜&nbsp; License](#-license)

---

## 🙋🏻&nbsp; Getting Started

Inside this package you'll found all theme and tokes definitions we're using to style and create components inside our application and design system.

✨ The main tool used behind the scenes here as CSS-in-JS library is [Stitches](https://stitches.dev/), so we encourage you to know better about it on their website. Stitches comes with a lot of great features like:

→ [Variants and Compound Variants](https://stitches.dev/docs/variants)<br>
→ [Theme tokens](https://stitches.dev/docs/tokens)<br>
→ [Framework agnostic API](https://stitches.dev/docs/framework-agnostic)<br>
→ [Responsive Styles](https://stitches.dev/docs/responsive-styles)<br>
→ [Typescript Support](https://stitches.dev/docs/typescript)

## 📦&nbsp; Install

```bash
$ yarn add @fuel-ui/css
```

```bash
$ pnpm install @fuel-ui/css
```

### 👨🏻‍💻&nbsp; Usage

```jsx
import { css } from "@fuel-ui/css";

const App = () => <div className={customStyle()}>Hello world</div>;

const customStyle = css({
  bg: "$gray6",
});
```

## 💪🏻&nbsp; Contributing

Feel like contributing? That's awesome! We have a [contributing guide](../../CONTRIBUTING.md) to help guide you.

## 📜&nbsp; License

The primary license for this repo is `Apache 2.0`, see [`LICENSE`](./LICENSE).
