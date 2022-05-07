/* eslint-disable import/no-relative-packages */
import type { Config } from '@jest/types';

import baseConfig from '../../jest.config';

import pkg from './package.json';

const config: Config.InitialOptions = {
  ...baseConfig,
  displayName: pkg.name,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/design-system/react/src/$1',
  },
};

export default config;
