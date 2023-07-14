import { promises as fs } from 'node:fs';
import { dirname } from 'path';
import prettier from 'prettier';
import { fileURLToPath } from 'url';

import { copyToFigma } from './utils/helpers.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const JSON_SET_MAP = {
  global: 'global',
  radix: 'radix',
  dark: 'colors-dark',
  light: 'colors-light',
};

(async () => {
  const argv = process.argv.slice(2);
  const set = argv[0].replace('--', '');
  const file = await import(`./defs/${set}.mjs`);
  copyToFigma(set, file[set]);

  const path = `${__dirname}/../tokens/${JSON_SET_MAP[set]}.json`;
  const data = JSON.stringify(file[set], null, 2);
  const formatted = await prettier.format(data, { parser: 'json' });
  await fs.writeFile(path, formatted);
})();
