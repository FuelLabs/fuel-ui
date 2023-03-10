/* eslint-disable @typescript-eslint/naming-convention */
import type { CSS } from '@fuel-stitches/react';
import { createStitches } from '@fuel-stitches/react';

import { darkColors } from './colors';
import { media } from './media';
import { createStyleStore } from './store';
import * as tokens from './tokens';
import * as utils from './utils';

export const {
  css,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme: _createTheme,
  config,
} = createStitches({
  theme: {
    ...tokens,
    colors: darkColors,
  },
  media,
  utils,
});

export type ThemeUtilsCSS = CSS<typeof config>;
export function cssObj(opts: ThemeUtilsCSS) {
  return opts;
}

export { utils, createStyleStore };
