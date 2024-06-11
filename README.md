<h1>⚡️ Fuel UI</h1>

[github-action-image]: https://github.com/fuellabs/fuel-ui/workflows/%E2%9C%85%20test/badge.svg
[github-action-url]: https://github.com/fuellabs/fuel-ui/actions?query=workflow%3A%22%E2%9C%85+test%22
[codecov-image]: https://img.shields.io/codecov/c/github/fuellabs/fuel-ui/master.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/fuellabs/fuel-ui/branch/master

<br>

[![License](https://img.shields.io/github/license/fuellabs/fuel-ui)](https://github.com/fuellabs/fuel-ui)
[![Issues Open](https://img.shields.io/github/issues/fuellabs/fuel-ui)](https://github.com/fuellabs/fuel-ui)
[![Github Forks](https://img.shields.io/github/forks/fuellabs/fuel-ui)](https://github.com/fuellabs/fuel-ui)
[![Github Stars](https://img.shields.io/github/stars/fuellabs/fuel-ui)](https://github.com/fuellabs/fuel-ui)

<h2>📝&nbsp; Table of Content</h2>

- [🙋🏻&nbsp; Getting Started](#-getting-started)
- [📦&nbsp; Install](#-install)
- [🛠&nbsp; Tools](#-tools)
- [💪🏻&nbsp; Contributing](#-contributing)
- [📜&nbsp; License](#-license)

---

## 🙋🏻&nbsp; Getting Started

Inside this monorepo you'll find all UI related projects from some of our
projects and also packages that we're using to build them:

```
📦 fuel-ui                      // root
┣ 📂 .github                    // git related files
┣ 📂 .vscode                    // vscode settings
┃
┣ 📂 common                     // common packages used across monorepo
┃ ┗ 📂 config                  // project containing some monorepo tools configurations
┃ ┗ 📂 test-utils              // package used for testing (patch on @testing-library/react)
┃
┣ 📂 design-system              // design system related packages
┃ ┗ 📂 css                     // contain our theme/tokens definitions
┃ ┗ 📂 react                   // ui related react components
┃ ┗ 📂 tokens                  // ui tokens creation scripts (colors, fonts, spaces, themes...)
```

All this two folders (`common`, `design-system`) are configured using [PNPM workspaces](https://pnpm.io/workspaces).

## 📦&nbsp; Install

1. Make sure you have the latest stable version of Node. Check out [Configuring Node and NVM to make sure](#configuring-node-and-nvm)
2. Clone the repository down locally.
3. `cd` into the project and run `pnpm install` to install all project dependencies.
4. Run `pnpm build` to build the peer dependencies

## 🛠&nbsp; Tools

As you can see, we're using a monorepo structure inside this repository. To accomplish
a good dev workflow and be able to have good code patterns across all packages we have
some global tools installed:

| Name                                                     | Description                          |
| -------------------------------------------------------- | ------------------------------------ |
| **[PNPM](https://pnpm.io/)**                             | Package Manager                      |
| **[Turborepo](https://turborepo.org/)**                  | Monorepo management                  |
| **[TSUP](https://tsup.egoist.dev/)**                     | Build Typescript libs using ESbuild  |
| **[ESLint](https://eslint.org/)**                        | Lint Javascript and Typescript files |
| **[Jest](https://jestjs.io/)**                           | Test runner                          |
| **[Testing Library](https://testing-library.com/)**      | Testing library                      |
| **[Prettier](https://prettier.io/)**                     | Code formatting                      |
| **[Husky](https://typicode.github.io/husky/#/)**         | Git hooks                            |
| **[Lint Staged](https://github.com/okonet/lint-staged)** | Git staged files linter              |

If you're stucked with some issue or you don't know any of these tools,
we really encourage you to check their websites and read more about them inside the documentation
before open an issue or get in touch with some of our contributors.

## 💪🏻&nbsp; Contributing

Feel like contributing? That's awesome! We have a [contributing guide](./CONTRIBUTING.md) to help guide you.

## 📜&nbsp; License

The primary license for this repo is `Apache 2.0`, see [`LICENSE`](./LICENSE).
