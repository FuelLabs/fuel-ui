import { defineConfig } from 'tsup';
import baseConfig from '@test-changesets/config/tsup';

export default defineConfig((options) => ({
  ...baseConfig(options),
  external: ['react'],
  entry: ['src/index.ts'],
}));
