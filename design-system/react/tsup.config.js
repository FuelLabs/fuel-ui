import baseConfig from '@fuels/tsup-config';
import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  ...baseConfig(options, { withReact: true }),
  entry: ['src/index.tsx'],
  publicDir: 'public',
  minify: 'terser',
  treeshake: true,
  splitting: true,
  metafile: true,
}));
