import { createJestConfig } from '@fuels/config'

export default createJestConfig({
  rootDir: __dirname,
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
})
