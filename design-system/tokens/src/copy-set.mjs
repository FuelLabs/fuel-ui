/* eslint-disable @typescript-eslint/naming-convention */
import { promises as fs } from 'node:fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { copyToFigma } from './utils/helpers.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const JSON_SET_MAP = {
  global: 'global',
  dark: 'colors-dark',
  light: 'colors-light',
  radix: 'radix',
};

(async () => {
  const argv = process.argv.slice(2);
  const set = argv[0].replace('--', '');
  const file = await import(`./defs/${set}.mjs`);
  copyToFigma(set, file[set]);

  const path = `${__dirname}/../tokens/${JSON_SET_MAP[set]}.json`;
  const data = JSON.stringify(file[set], null, 2);
  await fs.writeFile(path, data);
})();
