import { createStitches as baseCreate } from '@stitches/react'

import { media } from '../media'
import { colors } from '../colors'
import * as utils from '../utils'
import * as tokens from '../tokens'

export function createStitches() {
  return baseCreate({
    theme: {
      colors,
      fonts: Object.entries(tokens.fontFamily).reduce(
        (obj, [key, value]) => ({ ...obj, [key]: value.join(', ') }),
        {}
      ),
      space: tokens.spacing,
      fontSizes: tokens.fontSize,
      fontWeights: tokens.fontWeight,
      letterSpacings: tokens.letterSpacing,
      sizes: tokens.sizes,
      radii: tokens.borderRadius,
      shadows: tokens.boxShadow,
      zIndices: tokens.zIndex,
    },
    media,
    utils,
  })
}
