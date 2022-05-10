import type { Config } from '@jest/types';

export const config: Config.InitialOptions = {
  rootDir: __dirname,
  testEnvironment: 'jsdom',
  reporters: ['default', 'github-actions'],
  projects: ['<rootDir>/design-system/**/jest.config.ts'],
  collectCoverageFrom: [
    'design-system/**/*.{js,ts,tsx}',
    '!**/*test.{js,ts,tsx}',
    '!**/test-*.{js,ts}',
  ],
  setupFilesAfterEnv: ['@fuel/test-utils/setup.ts'],
  testPathIgnorePatterns: ['/lib/', '/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true,
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
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
