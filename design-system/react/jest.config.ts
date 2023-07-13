import type { Config } from "@fuels/jest/config"
import { config as baseConfig } from "@fuels/jest/config"

import pkg from "./package.json"

const config: Config = {
  ...baseConfig,
  rootDir: __dirname,
  displayName: pkg.name,
  setupFilesAfterEnv: ["@fuels/jest/setup"],
}

export default config
