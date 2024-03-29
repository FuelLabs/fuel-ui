import baseConfig from '@fuels/tsup-config';
import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  ...baseConfig(options, { withReact: true }),
  entry: ['lib/index.ts'],
  minify: 'terser',
  treeshake: true,
  splitting: true,
  metafile: true,
}));
