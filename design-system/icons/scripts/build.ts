/* eslint-disable @typescript-eslint/naming-convention */

import _ from 'lodash';
import { promises as fs } from 'node:fs';
import * as path from 'node:path';
import * as url from 'node:url';
import prettier from 'prettier';
import { optimize } from 'svgo';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const OUTPUT = '../public/icons';
const SRC_FOLDER = '../src';

function resolveRoot(...args: string[]) {
  return path.resolve(__dirname, ...args);
}

function pascalCase(inputString: string) {
  const camelCased = _.camelCase(inputString);
  return camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
}

(async () => {
  const spritePath = '../node_modules/@tabler/icons/tabler-sprite.svg';
  const svgPath = resolveRoot(spritePath);
  const svg = await fs.readFile(svgPath, 'utf-8');
  let formatted = await prettier.format(svg, { parser: 'html' });

  formatted = formatted.replaceAll(/id="(.+)"/g, (_, id) => {
    return `id="${pascalCase(id.replace('tabler-', ''))}"`;
  });

  formatted = optimize(formatted, {
    multipass: true, // boolean. false by default
    js2svg: {
      indent: 2, // string with spaces or number of spaces. 4 by default
    },
    plugins: [
      // set of built-in plugins enabled by default
      'preset-default',
      {
        name: 'removeAttrs',
        params: {
          attrs: '(fill|stroke-width)',
        },
      },
    ],
  }).data;

  await fs.rm(resolveRoot(OUTPUT), { recursive: true, force: true });
  await fs.mkdir(resolveRoot(OUTPUT), { recursive: true });
  await fs.writeFile(resolveRoot(OUTPUT, 'sprite.svg'), formatted);
  await fs.writeFile(resolveRoot('../../react/public', 'icons.svg'), formatted);

  const nodesPath = '../node_modules/@tabler/icons/tabler-nodes.json';
  const nodes = await fs.readFile(resolveRoot(nodesPath), 'utf-8');
  const nodeJson = JSON.parse(nodes);
  const allIcons = Object.keys(nodeJson).map((key) =>
    pascalCase(key.replace('tabler-', '')),
  );

  const typesFile = `
    export type IconName = '${allIcons.join("' | '")}';
  `;
  const typesPath = resolveRoot(SRC_FOLDER, 'icons.d.ts');
  await fs.writeFile(
    typesPath,
    await prettier.format(typesFile, { parser: 'typescript' }),
  );
})();
