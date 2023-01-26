import type { Config } from '@fuel-ui/test-utils/config';
import { config as baseConfig } from '@fuel-ui/test-utils/config';

import pkg from './package.json';

const config: Config = {
  ...baseConfig,
  rootDir: __dirname,
  displayName: pkg.name,
  setupFilesAfterEnv: ['../../common/test-utils/setup.ts'],
};

export default config;
