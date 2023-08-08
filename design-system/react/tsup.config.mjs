import metaUrlPlugin from '@chialab/esbuild-plugin-meta-url';
import baseConfig from '@fuels/tsup-config';
import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  ...baseConfig(options, { withReact: true }),
  entry: ['src/index.tsx'],
  publicDir: 'public',
  minify: process.env.NODE_ENV === 'production' ? 'terser' : false,
  treeshake: true,
  splitting: true,
  metafile: true,
  esbuildPlugins: [metaUrlPlugin()],
}));
