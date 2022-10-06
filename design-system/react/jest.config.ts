import type { Config } from '@fuel-ui/test-utils/config';
import { config as baseConfig } from '@fuel-ui/test-utils/config';

import pkg from './package.json';

const config: Config = {
  ...baseConfig,
  rootDir: __dirname,
  displayName: pkg.name,
  modulePathIgnorePatterns: ['node_modules', 'dist'],
  reporters: ['default', 'github-actions'],
  setupFilesAfterEnv: ['../../common/test-utils/setup.ts'],
  projects: ['<rootDir>/jest.config.ts'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/**/*d.ts',
    '!<rootDir>/**/*test.{ts,tsx}',
    '!<rootDir>/**/*stories.{ts,tsx}',
    '!<rootDir>/**/test-*.{ts}',
    '!<rootDir>/**/__mocks__/**',
    '!<rootDir>/**/jest.config.ts',
    '!<rootDir>/types/**',
  ],
};

export default config;
