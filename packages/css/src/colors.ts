import * as radixColors from '@radix-ui/colors'

export type Colors = keyof typeof colors

export const base = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
  black: radixColors.blackA.blackA12,
  white: radixColors.whiteA.whiteA12,
}

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

  bodyColor: radixColors.mauve.mauve1,
  textColor: radixColors.mauve.mauve11,

  gray1: radixColors.mauve.mauve1,
  gray2: radixColors.mauve.mauve2,
  gray3: radixColors.mauve.mauve3,
  gray4: radixColors.mauve.mauve4,
  gray5: radixColors.mauve.mauve5,
  gray6: radixColors.mauve.mauve6,
  gray7: radixColors.mauve.mauve7,
  gray8: radixColors.mauve.mauve8,
  gray9: radixColors.mauve.mauve9,
  gray10: radixColors.mauve.mauve10,
  gray11: radixColors.mauve.mauve11,
  gray12: radixColors.mauve.mauve12,

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
}

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

  bodyColor: radixColors.mauveDark.mauve2,
  textColor: radixColors.mauveDark.mauve11,

  gray1: radixColors.mauveDark.mauve1,
  gray2: radixColors.mauveDark.mauve2,
  gray3: radixColors.mauveDark.mauve3,
  gray4: radixColors.mauveDark.mauve4,
  gray5: radixColors.mauveDark.mauve5,
  gray6: radixColors.mauveDark.mauve6,
  gray7: radixColors.mauveDark.mauve7,
  gray8: radixColors.mauveDark.mauve8,
  gray9: radixColors.mauveDark.mauve9,
  gray10: radixColors.mauveDark.mauve10,
  gray11: radixColors.mauveDark.mauve11,
  gray12: radixColors.mauveDark.mauve12,

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
}

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
  | 'bronze'

export const allColorKeys: ColorKeys[] = [
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
]

export function isBright(color: string) {
  return Boolean(color.match(/gray|sky|mint|lime|yellow|amber/))
}
