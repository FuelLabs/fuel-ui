import type { Config } from '@fuels/jest/config';
import { config as baseConfig } from '@fuels/jest/config';

import pkg from './package.json';

const config: Config = {
  ...baseConfig,
  rootDir: __dirname,
  displayName: pkg.name,
  setupFilesAfterEnv: ['@fuels/jest/setup', './jest.setup.ts'],
  transform: {
    '.*\\.(tsx?)$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
};

export default config;
