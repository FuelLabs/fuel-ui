import { createElement } from 'react'
import { css, allColors, Colors, cx, utils } from '@fuel/css'

import { createComponent, HTMLProps } from '@/utils'

export type HeadingProps = HTMLProps['h1'] & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  fontSize?: utils.TextSizes
  fontColor?: Colors
}

export const Heading = createComponent<HeadingProps, HTMLHeadElement>(
  ({ as = 'h2', fontSize, fontColor, children, className, ...props }) => {
    const classes = cx(className, styles({ fontSize, fontColor }))
    return createElement(as, { ...props, className: classes }, children)
  }
)

const styles = css({
  mt: '0.5rem',
  mb: '1.25rem',

  variants: {
    // FIX: adjust type type
    fontSize: (utils.textSize.__keys as any[]).reduce(
      (obj, key) => ({
        ...obj,
        [key]: {
          textSize: key,
        },
      }),
      {}
    ),
    // FIX: adjust type type
    fontColor: (allColors as any[]).reduce(
      (obj, key) => ({
        ...obj,
        [key]: {
          color: `$${key}`,
        },
      }),
      {}
    ),
  },

  defaultVariants: {
    fontSize: 'md',
    fontColor: 'fontColor',
  },
})
