/* eslint-disable import/no-relative-packages */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'tsup';

import baseConfig from '../../common/config/tsup';

export default defineConfig((options) => ({
  ...baseConfig(options, { withReact: false, ts: false }),
  format: ['esm', 'cjs'],
  entry: ['src/index.js'],
  minify: 'terser',
  treeshake: true,
  splitting: true,
  metafile: true,
}));
