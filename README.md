# ⚡️ FuelLabs Design System
[![License](https://img.shields.io/github/license/FuelLabs/design-system)](https://github.com/FuelLabs/design-system)
[![Issues Open](https://img.shields.io/github/issues/FuelLabs/design-system)](https://github.com/FuelLabs/design-system)
[![Github Forks](https://img.shields.io/github/forks/FuelLabs/design-system)](https://github.com/FuelLabs/design-system)
[![Github Stars](https://img.shields.io/github/stars/FuelLabs/design-system)](https://github.com/FuelLabs/design-system)

Welcome to the source code repository for FuelLabs Design System.

## Getting Started

This project utilizes Storybook for component development. If you would like to know more about Storybook or how it works, [check out their website](https://storybook.js.org/).

### Project Installation

1. Make sure you have the latest stable version of Node. Check out [Configuring Node and NVM to make sure](#configuring-node-and-nvm)
2. Clone the repository down locally.
3. `cd` into the project and run `pnpm install` to install all project dependencies.
4. Run `pnpm build` to build the peer dependencies

### Running the Development Environment

1. `cd` into `packages/react`
2. Run `pnpm storybook`

Whenever you add, remove, or alter a component's css annotation metadata, you'll need to restart Storybook to see those changes.

### Configuring Node and NVM

We reccomend you use the latest stable version of node on your computer. 

You can verify by running: `node -v`.

In case you don't, you can use [NVM](https://nvm.sh/) to install the latest version:

1. Follow the steps on the [NVM Website](https://nvm.sh/) to install NVM.
2. Run `nvm install --lts` to install the latest version of Node.
3. Run `nvm use --lts` to use the latest version on your terminal.


<!-- 
## Contributing

TODO: https://github.com/FuelLabs/design-system/issues/11
-->

<!-- 
## License

TODO: https://github.com/FuelLabs/design-system/issues/12
-->