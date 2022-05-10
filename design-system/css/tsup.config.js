import { defineConfig } from 'tsup';
import baseConfig from '@fuel/config/tsup';

export default defineConfig((options) => ({
  ...baseConfig(options, { withReact: true }),
  entry: ['src/index.ts'],
}));
