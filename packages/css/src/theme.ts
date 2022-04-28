import { createStitches } from '@stitches/react'

import { media } from './media'
import { colors } from './colors'
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
    colors,
  },
  media,
  utils,
})
