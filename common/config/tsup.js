/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();

const path = require('path');

module.exports = (_options, { withReact, ts = true } = {}) => ({
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: true,
  clean: false,
  minify: process.env.NODE_ENV === 'production',
  ...(withReact && { inject: [path.resolve(__dirname, './react-imports.js')] }),
  ...(ts && { onSuccess: 'tsc --emitDeclarationOnly --declaration' }),
});
