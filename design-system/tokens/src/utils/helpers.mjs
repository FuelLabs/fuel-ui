import * as radixColors from '@radix-ui/colors';
import { spawn } from 'child_process';

export function copyToFigma(name, obj) {
  const proc = spawn('pbcopy');
  proc.stdin.write(JSON.stringify(obj, null, 2));
  proc.stdin.end();
  console.log(`✅ Set: "${name}" copied to clipboard!`);
}

export function createItem(value, type) {
  return { type, value };
}

export function createColor(color) {
  return createItem(color, 'color');
}

export function createDef(
  type,
  obj,
  getValue = (value) => value,
  getKey = (key) => key,
) {
  return Object.entries(obj).reduce((obj, [key, value]) => {
    obj[getKey(key)] = {
      value: getValue(value),
      type,
    };
    return obj;
  }, {});
}

export function createFrom(scale) {
  return {
    1: createItem(`{${scale}.1}`, 'color'),
    2: createItem(`{${scale}.2}`, 'color'),
    3: createItem(`{${scale}.3}`, 'color'),
    4: createItem(`{${scale}.4}`, 'color'),
    5: createItem(`{${scale}.5}`, 'color'),
    6: createItem(`{${scale}.6}`, 'color'),
    7: createItem(`{${scale}.7}`, 'color'),
    8: createItem(`{${scale}.8}`, 'color'),
    9: createItem(`{${scale}.9}`, 'color'),
    10: createItem(`{${scale}.10}`, 'color'),
    11: createItem(`{${scale}.11}`, 'color'),
    12: createItem(`{${scale}.12}`, 'color'),
  };
}

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
      (k) => k.replace('whiteA', ''),
    ),
    blackA: createDef(
      'color',
      radixColors.blackA,
      (v) => v,
      (k) => k.replace('blackA', ''),
    ),
    inverseA: createFrom(isLight ? 'blackA' : 'whiteA'),
  };
}

export function createTypographValue({
  fontFamily,
  fontWeight,
  lineHeight,
  fontSize,
  letterSpacing,
  textCase,
  textDecoration,
}) {
  return {
    value: {
      fontWeight,
      fontFamily: `{fontFamilies.${fontFamily}}`,
      lineHeight: `{lineHeights.${lineHeight}}`,
      fontSize: `{fontSizes.${fontSize}}`,
      letterSpacing: `{letterSpacings.${letterSpacing}}`,
      textCase: `{textCases.${textCase}}`,
      textDecoration: `{textDecorations.${textDecoration}}`,
    },
    type: `typography`,
  };
}

export function createBody(fonts) {
  return Object.entries(fonts)
    .filter(([key]) => key === 'body')
    .reduce((obj, [key, font]) => {
      return {
        ...obj,
        [key]: Object.entries(font.sizes).reduce((obj, [size, sizeItem]) => {
          const weights = font.weights;
          return {
            ...obj,
            [size]: createTypographValue({
              fontFamily: key,
              fontWeight: `Regular`,
              lineHeight: sizeItem.lineHeight,
              fontSize: size,
              letterSpacing: 'default',
              textCase: 'normal',
              textDecoration: 'none',
            }),
            ...(weights &&
              weights.reduce((obj, weight) => {
                return {
                  ...obj,
                  [`${size}-${weight}`]: createTypographValue({
                    fontFamily: key,
                    fontWeight: weight,
                    lineHeight: sizeItem.lineHeight,
                    fontSize: size,
                    letterSpacing: 'default',
                    textCase: 'normal',
                    textDecoration: 'none',
                  }),
                };
              }, {})),
          };
        }, {}),
      };
    }, {});
}

export function createHeadings(fonts) {
  const selected = Object.entries(fonts).filter(
    ([key]) => key === 'headings',
  )[0];

  const sizes = selected[1].sizes;
  const weights = selected[1].weights;

  return Object.entries(sizes).reduce((obj, [key, size]) => {
    return {
      ...obj,
      [key]: createTypographValue({
        fontFamily: 'headings',
        fontWeight: `Regular`,
        lineHeight: size.lineHeight,
        fontSize: size.fontSize,
        letterSpacing: size.letterSpacing,
        textCase: 'normal',
        textDecoration: 'none',
      }),
      ...(weights &&
        weights.reduce((obj, weight) => {
          return {
            ...obj,
            [`${key}-${weight}`]: createTypographValue({
              fontFamily: 'headings',
              fontWeight: weight,
              lineHeight: size.lineHeight,
              fontSize: size.fontSize,
              letterSpacing: size.letterSpacing,
              textCase: 'normal',
              textDecoration: 'none',
            }),
          };
        }, {})),
    };
  }, {});
}

export function createIntents() {
  return {
    intents: {
      base: createFrom('scales.gray'),
      primary: createFrom('scales.green'),
      secondary: createFrom('scales.red'),
      info: createFrom('scales.blue'),
      warning: createFrom('scales.yellow'),
      success: createFrom('scales.green'),
      error: createFrom('scales.red'),
    },
  };
}
