import * as tokens from '../definitions/base-tokens.mjs';
import {
  createDef,
  createHeadings,
  createTextStyle,
} from '../utils/helpers.mjs';

const fontSizes = createDef('fontSizes', tokens.fontSizes);
const fontWeights = createDef('fontWeights', tokens.fontWeights);
const spacing = createDef('spacing', tokens.spacing);
const sizing = createDef('sizing', tokens.sizing);
const lineHeights = createDef('lineHeights', tokens.lineHeights);
const letterSpacings = createDef('letterSpacing', tokens.letterSpacings);
const borderRadius = createDef('borderRadius', tokens.borderRadius);

/**
 * Typography
 */

const textCases = createDef('textCase', tokens.textCases);
const textDecorations = createDef('textDecoration', tokens.textDecorations);

const fontFamilies = createDef(
  'fontFamilies',
  tokens.fonts,
  (value) => value.fontFamily,
);

const body = createTextStyle(tokens.fonts, 'body');
const display = createTextStyle(tokens.fonts, 'display');
const mono = createTextStyle(tokens.fonts, 'mono');
const headings = createHeadings(tokens.fonts);
const borders = createDef('border', tokens.borders);

const typography = {
  ...body,
  headings,
  display,
  mono,
};

export const global = {
  fontSizes,
  spacing,
  sizing,
  lineHeights,
  letterSpacings,
  borderRadius,
  textCases,
  textDecorations,
  fontWeights,
  fontFamilies,
  ...typography,
  borders,
};
