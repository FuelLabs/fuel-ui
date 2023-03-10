import { defineConfig } from 'tsup';
import baseConfig from '../../common/config/tsup';

export default defineConfig((options) => ({
  ...baseConfig(options, { withReact: true }),
  format: ['esm', 'cjs'],
  entry: ['src/index.js'],
}));
