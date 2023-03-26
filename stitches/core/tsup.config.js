import { defineConfig } from 'tsup';
import baseConfig from '../../common/config/tsup';

export default defineConfig(() => ({
  ...baseConfig(options, { withReact: false }),
  format: ['esm', 'cjs'],
  entry: ['src/index.js'],
}));
