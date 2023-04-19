import * as radixColors from '@radix-ui/colors';

import { createColor, createDef, createFrom } from './helpers.mjs';

const SCALES = ['gray', 'green', 'yellow', 'red', 'blue'];
const SCALE_KEYS = [...Array(12).keys()].map((i) => i + 1);

const SCALE_REMAP = {
  red: 'crimson',
  blue: 'indigo',
};

export function createScales(isLight) {
  return {
    scales: SCALES.reduce((acc, key) => {
      acc[key] = SCALE_KEYS.reduce((int, scaleKey) => {
        const k = SCALE_REMAP[key] || key;
        int[scaleKey] = isLight
          ? createColor(`{${k} / light.${scaleKey}}`)
          : createColor(`{${k} / dark.${scaleKey}}`);
        return int;
      }, {});
      return acc;
    }, {}),
  };
}

export function createAlphaScales(isLight) {
  return {
    whiteA: createDef(
      'color',
      radixColors.whiteA,
      (v) => v,
      (k) => k.replace('whiteA', '')
    ),
    blackA: createDef(
      'color',
      radixColors.blackA,
      (v) => v,
      (k) => k.replace('blackA', '')
    ),
    inverseA: createFrom(isLight ? 'blackA' : 'whiteA'),
  };
}
