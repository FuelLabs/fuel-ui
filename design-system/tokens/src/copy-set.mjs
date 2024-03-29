import { promises as fs } from 'node:fs';
import { dirname } from 'path';
import prettier from 'prettier';
import { fileURLToPath } from 'url';

import { copyToFigma } from './utils/helpers.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const JSON_SET_MAP = {
  global: 'core/global',
  radix: 'core/radix',
  dark: 'themes/colors-dark',
  light: 'themes/colors-light',
};

(async () => {
  const argv = process.argv.slice(2);
  const set = argv[0].replace('--', '');
  const file = await import(`./themes/${set}.mjs`);
  copyToFigma(set, file[set]);

  const path = `${__dirname}/../figma/${JSON_SET_MAP[set]}.json`;
  const data = JSON.stringify(file[set], null, 2);
  const formatted = await prettier.format(data, { parser: 'json' });
  await fs.writeFile(path, formatted);
})();
