import type { Options } from 'tsup';
import { defineConfig } from 'tsup';

export function createConfig(options: Options) {
  return defineConfig({
    format: ['cjs', 'esm'],
    splitting: false,
    sourcemap: true,
    clean: false,
    minify: !options.watch,
  });
}
