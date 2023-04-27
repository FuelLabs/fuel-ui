import { copyToFigma } from './utils/helpers.mjs';

(async () => {
  const argv = process.argv.slice(2);
  const set = argv[0].replace('--', '');
  const file = await import(`./defs/${set}.mjs`);
  copyToFigma(set, file[set]);
})();
