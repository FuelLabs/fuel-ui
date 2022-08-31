import type { Config } from '@jest/types';

export const config: Config.InitialOptions = {
  preset: 'ts-jest/presets/default-esm',
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  testTimeout: 20000,
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFiles: ['dotenv/config'],
  testPathIgnorePatterns: ['/lib/', '/node_modules/'],
  modulePathIgnorePatterns: ['/dist/'],
  coveragePathIgnorePatterns: ['/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
    '~/(.*)$': '<rootDir>/src/$1',
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};

export default config;
