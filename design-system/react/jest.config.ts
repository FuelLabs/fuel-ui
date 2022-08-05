import baseConfig from '@fuel-ui/test-utils/config';

import pkg from './package.json';

const config: typeof baseConfig = {
  ...baseConfig,
  rootDir: __dirname,
  displayName: pkg.name,
  modulePathIgnorePatterns: ['node_modules', 'dist', 'jest-test-results.json'],
};

export default config;
