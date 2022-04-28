import { colors } from '../colors'
import * as tokens from '../tokens'

export function createTailwindTheme() {
  return {
    colors,
    extend: {
      fontFamily: tokens.fontFamily,
      fontWeight: tokens.fontWeight,
      letterSpacing: tokens.letterSpacing,
      lineHeight: tokens.lineHeight,
      borderRadius: tokens.borderRadius,
      boxShadow: tokens.borderRadius,
      zIndex: tokens.zIndex,

      minWidth: {
        ...tokens.sizes,
        screen: '100vw',
      },
      minHeight: {
        ...tokens.sizes,
        screen: '100vh',
      },
    },
  }
}
