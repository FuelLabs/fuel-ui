import { createStitches } from '@stitches/react'

import { colors, darkColors } from './colors'
import { media } from './media'
import * as tokens from './tokens'
import * as utils from './utils'

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
    colors,
  },
  media,
  utils,
})

export const darkTheme = createTheme({
  colors: darkColors,
})

export { utils }
