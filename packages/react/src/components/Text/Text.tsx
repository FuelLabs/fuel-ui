import { createComponent, HTMLProps } from '@/utils'
import { css, allColors, Colors, cx, utils } from '@fuel/css'
import { createElement } from 'react'

export type TextProps = HTMLProps['p'] & {
  fontSize?: utils.TextSizes
  fontColor?: Colors
}

export const Text = createComponent<TextProps, HTMLParagraphElement>(
  ({ as = 'p', fontSize, fontColor, children, className, ...props }) => {
    const classes = cx(className, styles({ fontSize, fontColor }))
    return createElement(as, { ...props, className: classes }, children)
  }
)

const styles = css({
  variants: {
    // TODO: adjust typings
    fontSize: (utils.textSize.__keys as any[]).reduce(
      (obj, key) => ({
        ...obj,
        [key]: {
          textSize: key,
        },
      }),
      {}
    ),
    // TODO: adjust typings
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
