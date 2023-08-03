import baseConfig from '@fuels/tsup-config';
import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  ...baseConfig(options, { withReact: false, ts: false }),
  format: ['esm', 'cjs'],
  entry: ['src/index.js'],
  minify: 'terser',
  treeshake: true,
  splitting: true,
  metafile: true,
}));
