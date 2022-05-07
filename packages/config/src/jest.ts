import type { Config } from '@jest/types';

export function createJestConfig(options: Config.InitialOptions) {
  return {
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    testEnvironment: 'jsdom',
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
    ...options,
  };
}
