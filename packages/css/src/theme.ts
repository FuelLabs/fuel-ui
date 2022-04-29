import { createStitches } from '@stitches/react'

import { media } from './media'
import { colors, darkColors } from './colors'
import * as utils from './utils'
import * as tokens from './tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    ...tokens,
    colors: colors,
  },
  media,
  utils,
})

export const darkTheme = createTheme({
  colors: darkColors,
})

export { utils }
