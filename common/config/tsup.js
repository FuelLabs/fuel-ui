module.exports = (options) => ({
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: true,
  clean: false,
  minify: !options.watch,
});
