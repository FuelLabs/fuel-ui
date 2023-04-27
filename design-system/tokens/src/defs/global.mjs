import * as tokens from '../base-tokens.mjs';
import {
  createBody,
  createDef,
  createHeadings,
  createItem,
  createUtilities,
} from '../utils/index.mjs';

const fontSizes = createDef('fontSizes', tokens.fontSizes);
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
  (value) => value.fontFamily
);

// fontWeights
const fontWeights = Object.entries(tokens.fonts).reduce((obj, [key, font]) => {
  return {
    ...obj,
    [key]: font.weights.reduce((obj, weight) => {
      obj[weight] = createItem(weight, 'fontWeights');
      return obj;
    }, {}),
  };
}, {});

const body = createBody(tokens.fonts);
const headings = createHeadings(tokens.fonts);
const utilities = createUtilities(tokens.utilities);
const borders = createDef('border', tokens.borders);

const typography = {
  ...body,
  headings,
  utilities,
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
