import { tokens } from '@fuel-ui/design-tokens';
import * as radixColors from '@radix-ui/colors';

export type Colors = keyof typeof lightColors;

function fromColors(name: string, rename?: string) {
  return Object.fromEntries(
    Array.from({ length: 12 }).map((_, i) => {
      const idx = i + 1;
      const key = `${rename || name}${idx}`;
      const prop = `${name}${idx}`;
      return [key, tokens.colors[prop]];
    })
  );
}

export const base = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
  brand: '#00E182',

  ...radixColors.blackA,
  ...radixColors.whiteA,
};

export const lightColors = {
  ...base,
  ...tokens.light,

  ...fromColors('gray'),
  ...fromColors('green', 'accent'),
  ...fromColors('crimson'),
  ...fromColors('green'),
  ...fromColors('indigo'),
  ...fromColors('yellow'),

  bodyColor: '$bodyBg',
  textColor: '$textActive',
  overlayBg: '$semanticGhostBaseBg',
};

export const darkColors = {
  ...base,
  ...tokens.dark,

  ...fromColors('grayDark', 'gray'),
  ...fromColors('greenDark', 'accent'),
  ...fromColors('crimsonDark', 'crimson'),
  ...fromColors('greenDark', 'green'),
  ...fromColors('indigoDark', 'indigo'),
  ...fromColors('yellowDark', 'yellow'),

  bodyColor: '$bodyBg',
  textColor: '$textActive',
  overlayBg: '$semanticGhostBaseBg',
};

export type ColorKeys =
  | 'gray'
  | 'accent'
  | 'tomato'
  | 'red'
  | 'crimson'
  | 'pink'
  | 'plum'
  | 'purple'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'grass'
  | 'orange'
  | 'brown'
  | 'sky'
  | 'mint'
  | 'lime'
  | 'yellow'
  | 'amber'
  | 'gold'
  | 'bronze';

export const colorKeys: ColorKeys[] = [
  'gray',
  'accent',
  'tomato',
  'red',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'grass',
  'orange',
  'brown',
  'sky',
  'mint',
  'lime',
  'yellow',
  'amber',
  'gold',
  'bronze',
];

export const allColors = Object.keys(lightColors);

export function isBright(color: string) {
  return Boolean(color.match(/gray|accent|mint|sky|lime|yellow|amber/));
}
