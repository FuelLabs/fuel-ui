/* eslint-disable import/no-relative-packages */
import type { Config } from '@jest/types';

import baseConfig from '../../jest.config';

const config: Config.InitialOptions = {
  ...baseConfig,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/packages/react/src/$1',
  },
};

export default config;
