import * as radixColors from '@radix-ui/colors';

import { customColors } from './custom';

export type Colors = keyof typeof lightColors;

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
  ...customColors.green,
  ...radixColors.tomato,
  ...radixColors.red,
  ...radixColors.crimson,
  ...radixColors.pink,
  ...radixColors.plum,
  ...radixColors.purple,
  ...radixColors.violet,
  ...radixColors.indigo,
  ...radixColors.blue,
  ...radixColors.cyan,
  ...radixColors.teal,
  ...radixColors.grass,
  ...radixColors.orange,
  ...radixColors.brown,
  ...radixColors.sky,
  ...radixColors.mint,
  ...radixColors.lime,
  ...radixColors.yellow,
  ...radixColors.amber,
  ...radixColors.gold,
  ...radixColors.bronze,

  gray1: radixColors.slate.slate1,
  gray2: radixColors.slate.slate2,
  gray3: radixColors.slate.slate3,
  gray4: radixColors.slate.slate4,
  gray5: radixColors.slate.slate5,
  gray6: radixColors.slate.slate6,
  gray7: radixColors.slate.slate7,
  gray8: radixColors.slate.slate8,
  gray9: radixColors.slate.slate9,
  gray10: radixColors.slate.slate10,
  gray11: radixColors.slate.slate11,
  gray12: radixColors.slate.slate12,

  accent1: customColors.green.green1,
  accent2: customColors.green.green2,
  accent3: customColors.green.green3,
  accent4: customColors.green.green4,
  accent5: customColors.green.green5,
  accent6: customColors.green.green6,
  accent7: customColors.green.green7,
  accent8: customColors.green.green8,
  accent9: customColors.green.green9,
  accent10: customColors.green.green10,
  accent11: customColors.green.green11,
  accent12: customColors.green.green12,

  bodyColor: '#FFFFFF',
  textColor: '$gray11',
  borderColor: '$gray5',
  borderHover: '$gray7',

  inputBg: '$gray1',
  inputColor: '$gray11',
  inputBorder: '$gray6',
  inputPlaceholderColor: '$gray9',

  cardBg: '$gray1',
  overlayBg: '$gray2',
};

export const darkColors = {
  ...base,
  ...customColors.greenDark,
  ...radixColors.tomatoDark,
  ...radixColors.redDark,
  ...radixColors.crimsonDark,
  ...radixColors.pinkDark,
  ...radixColors.plumDark,
  ...radixColors.purpleDark,
  ...radixColors.violetDark,
  ...radixColors.indigoDark,
  ...radixColors.blueDark,
  ...radixColors.cyanDark,
  ...radixColors.tealDark,
  ...radixColors.grassDark,
  ...radixColors.orangeDark,
  ...radixColors.brownDark,
  ...radixColors.skyDark,
  ...radixColors.mintDark,
  ...radixColors.limeDark,
  ...radixColors.yellowDark,
  ...radixColors.amberDark,
  ...radixColors.goldDark,
  ...radixColors.bronzeDark,

  gray1: radixColors.slateDark.slate1,
  gray2: radixColors.slateDark.slate2,
  gray3: radixColors.slateDark.slate3,
  gray4: radixColors.slateDark.slate4,
  gray5: radixColors.slateDark.slate5,
  gray6: radixColors.slateDark.slate6,
  gray7: radixColors.slateDark.slate7,
  gray8: radixColors.slateDark.slate8,
  gray9: radixColors.slateDark.slate9,
  gray10: radixColors.slateDark.slate10,
  gray11: radixColors.slateDark.slate11,
  gray12: radixColors.slateDark.slate12,

  accent1: customColors.greenDark.green1,
  accent2: customColors.greenDark.green2,
  accent3: customColors.greenDark.green3,
  accent4: customColors.greenDark.green4,
  accent5: customColors.greenDark.green5,
  accent6: customColors.greenDark.green6,
  accent7: customColors.greenDark.green7,
  accent8: customColors.greenDark.green8,
  accent9: customColors.greenDark.green9,
  accent10: customColors.greenDark.green10,
  accent11: customColors.greenDark.green11,
  accent12: customColors.greenDark.green12,

  bodyColor: '#000000',
  textColor: '$gray11',
  borderColor: '$bodyColor',
  borderHover: '$gray5',

  inputBg: '$gray1',
  inputColor: '$gray12',
  inputBorder: 'transparent',
  inputPlaceholderColor: '$gray9',

  cardBg: '#101112',
  overlayBg: '$gray2',
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
