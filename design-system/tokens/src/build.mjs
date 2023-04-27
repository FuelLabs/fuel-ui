/* eslint-disable @typescript-eslint/naming-convention */
import chroma from 'chroma-js';
import _ from 'lodash';
import fs from 'node:fs';
import path from 'path';
import prettier from 'prettier';
import * as url from 'url';

import { dark } from './defs/dark.mjs';
import { light } from './defs/light.mjs';

function readJSON(filepath) {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const file = fs.readFileSync(path.join(__dirname, filepath), 'utf-8');
  return JSON.parse(file);
}

function parsePath(obj, set) {
  const res = Object.entries(obj).reduce((acc, [key, value]) => {
    if (key.includes(' / ')) {
      key = key.replace(' / ', '.');
    }

    if (typeof value === 'object') {
      acc[key] = {
        ...parsePath(value, set ? `${set}.${key}` : key),
        ...value,
        __path: set ? `${set}.${key}` : key,
      };
    }
    return acc;
  }, obj);

  delete res['component-wrapper'];
  delete res.layers;
  delete res.borders;
  delete res.body;
  delete res.headings;
  delete res.utilities;
  delete res.textCases;
  delete res.textDecorations;
  delete res.borderRadius;
  delete res.spacing;
  delete res.sizing;
  delete res.lineHeights;
  delete res.fontSizes;
  delete res.fontFamilies;
  delete res.letterSpacings;
  delete res.fontWeights;
  return res;
}

function addCSSVariables(obj, vars) {
  return Object.entries(obj).reduce((acc, [, value]) => {
    if (typeof value?.value === 'string') {
      const val = value.value.replace(' / ', '.');
      acc[value.__path] = val;
    }
    if (typeof value?.value === 'object') {
      Object.entries(value.value).forEach(([key, val]) => {
        if (key.includes('__path')) return;
        if (typeof val === 'string') {
          acc[`${value.__path}.${key}`] = val;
        }
      });
    }
    if (typeof value === 'object') {
      addCSSVariables(value, acc);
    }
    return acc;
  }, vars);
}

function adjustThemeOnVars(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const groups = key.match(/^(\w+).(\w+)./);

    if (groups?.[1] === 'radix') {
      delete acc[key];
      key = key.replace('radix', 'colors');
      acc[key] = value;
    }

    if (groups?.[2] === 'scales') {
      acc[key] = value.replace('{', `{colors.`);
    }

    if (
      (groups?.[1] === 'light' || groups?.[1] === 'dark') &&
      groups?.[2] !== 'scales' &&
      value.startsWith('{')
    ) {
      acc[key] = value.replace('{', `{${groups[1]}.`);
    }
    return acc;
  }, obj);
}

function renameKey(key) {
  let val = key
    .replace('global', '')
    .split('.')
    .map((i) => _.camelCase(i))
    .join('-');

  if (val.startsWith('-')) {
    val = val.slice(1);
  }
  const scale = val.match(/(\b(?!spacing\b|sizing\b)\w+\b)(-)(\d+)$/);
  if (scale) {
    val = val.replace(scale[0], `${scale[1]}${scale[3]}`);
  }

  const colorType = val.match(/(\w+)-(dark|light)(\d+)/);
  if (colorType) {
    const color = colorType[1];
    const theme = colorType[2];
    const num = colorType[3];
    val = val.replace(
      colorType[0],
      `${color}${theme === 'dark' ? _.capitalize(theme) : ''}${num}`
    );
  }
  val = `--f-${val}`;
  return val;
}

function finalParse(obj) {
  const entries = Object.entries(obj)
    // rename values of keys and values
    .map(([key, value]) => {
      key = renameKey(key);
      if (value.includes('{') && value.includes('}')) {
        const startIdx = value.indexOf('{');
        const endIdx = value.indexOf('}');
        const path = value.slice(startIdx + 1, endIdx);
        const newValue = `var(${renameKey(path)})`;
        value = value.replace(value.slice(startIdx, endIdx + 1), newValue);
      }
      return [key, value];
    })
    // transform hex colors to hsl
    .map(([key, value]) => {
      if (value.startsWith('#')) {
        value = chroma(value).css('hsla');
      }
      return [key, value];
    })
    // sort by key alphabetically
    .sort((a, b) => {
      return a[0].localeCompare(b[0]);
    });

  return Object.fromEntries(entries);
}

function findOriginalValue(val, obj) {
  const path = val.replace('var(--f-', '').replace(')', '');
  const newVal = _.get(obj, `--f-${path}`);
  if (newVal?.startsWith('var(')) {
    return findOriginalValue(newVal, obj);
  }
  return newVal;
}

function createJSFile(obj) {
  const res = {};
  Object.entries(obj).forEach(([key, value]) => {
    const prefix = key.match(/--f-(colors|dark|light)/)?.[1];
    key = _.camelCase(key.replace(prefix, '').slice(3));
    let val = value;
    if (value.startsWith('var(')) {
      val = findOriginalValue(value, obj);
    }
    _.set(res, `${prefix}.${key}`, val);
  });
  return prettier.format(`export default ${JSON.stringify(res, null, 2)}`, {
    parser: 'babel',
  });
}

const BUILD_DIR = '../build';
const TOKENS_DIR = '../tokens';

async function main() {
  const radix = readJSON(`${TOKENS_DIR}/radix.json`);
  const withPaths = parsePath({
    light,
    dark,
    radix,
  });

  const CSSVariables = addCSSVariables(withPaths, {});
  const CSSparsed = adjustThemeOnVars(CSSVariables);
  const final = finalParse(CSSparsed);
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const buildDir = path.join(__dirname, BUILD_DIR);
  const tsFilepath = path.join(buildDir, '/tokens-raw.ts');
  const jsonFile = createJSFile(final);

  if (fs.existsSync(buildDir)) {
    fs.rmSync(path.join(buildDir), { recursive: true });
  }
  fs.mkdirSync(buildDir);
  fs.writeFileSync(tsFilepath, jsonFile, 'utf-8');
}

main();
