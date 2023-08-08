import type { Config } from '@fuels/jest/config';
import { config as baseConfig } from '@fuels/jest/config';

import pkg from './package.json';

const config: Config = {
  ...baseConfig,
  rootDir: __dirname,
  displayName: pkg.name,
  setupFilesAfterEnv: ['@testing-library/jest-dom', '@fuels/jest/setup'],
  transform: {
    '.*\\.(tsx?)$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
            optimizer: {
              globals: {
                vars: {
                  __STORYBOOK_FUEL_UI__: 'false',
                },
              },
            },
          },
        },
      },
    ],
  },
};

export default config;
