import baseConfig from '@fuel-ui/test-utils/config';
import type { Config } from '@jest/types';

import pkg from './package.json';

const config: Config.InitialOptions = {
  ...baseConfig,
  rootDir: __dirname,
  displayName: pkg.name,
  modulePathIgnorePatterns: ['node_modules', 'dist', 'jest-test-results.json'],
};

export default config;
