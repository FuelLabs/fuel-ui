import { createJestConfig } from '@fuel/config';

export default createJestConfig({
  rootDir: __dirname,
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
});
