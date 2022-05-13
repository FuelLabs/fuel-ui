import * as radixColors from '@radix-ui/colors';

export type Colors = keyof typeof colors;

export const base = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',

  ...radixColors.blackA,
  ...radixColors.whiteA,
};

export const colors = {
  ...base,
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
  ...radixColors.green,
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

  accent1: radixColors.green.green1,
  accent2: radixColors.green.green2,
  accent3: radixColors.green.green3,
  accent4: radixColors.green.green4,
  accent5: radixColors.green.green5,
  accent6: radixColors.green.green6,
  accent7: radixColors.green.green7,
  accent8: radixColors.green.green8,
  accent9: radixColors.green.green9,
  accent10: radixColors.green.green10,
  accent11: radixColors.green.green11,
  accent12: radixColors.green.green12,

  bodyColor: '#F5F6F7',
  textColor: '$gray11',
  borderColor: '$gray5',

  inputBg: '$gray1',
  inputAddonBg: '$gray5',
  inputBorder: '$gray6',
  inputOutline: '$blackA2',
};

export const darkColors = {
  ...base,
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
  ...radixColors.greenDark,
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

  accent1: radixColors.greenDark.green1,
  accent2: radixColors.greenDark.green2,
  accent3: radixColors.greenDark.green3,
  accent4: radixColors.greenDark.green4,
  accent5: radixColors.greenDark.green5,
  accent6: radixColors.greenDark.green6,
  accent7: radixColors.greenDark.green7,
  accent8: radixColors.greenDark.green8,
  accent9: radixColors.greenDark.green9,
  accent10: radixColors.greenDark.green10,
  accent11: radixColors.greenDark.green11,
  accent12: radixColors.greenDark.green12,

  bodyColor: '$gray2',
  textColor: '$gray11',
  borderColor: '$gray3',

  inputBg: '$blackA8',
  inputAddonBg: '$gray3',
  inputBorder: 'transparent',
  inputOutline: '$whiteA3',
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

export const allColors = Object.keys(colors);

export function isBright(color: string) {
  return Boolean(color.match(/gray|sky|mint|lime|yellow|amber/));
}
