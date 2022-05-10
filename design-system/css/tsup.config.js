import { defineConfig } from 'tsup';
import baseConfig from '@fuel/config/tsup';

export default defineConfig((options) => ({
  ...baseConfig(options),
  entry: ['src/index.ts'],
}));
