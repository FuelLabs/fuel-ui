import baseConfig from '@fuel-ui/test-utils/config';

const config: typeof baseConfig = {
  ...baseConfig,
  rootDir: __dirname,
  modulePathIgnorePatterns: ['node_modules', 'dist'],
  reporters: ['default', 'github-actions'],
  collectCoverageFrom: [
    '<rootDir>/design-system/react/src/**/*.{ts,tsx}',
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
