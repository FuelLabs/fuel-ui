import { css, allColors, Colors, cx, utils } from '@fuel/css'
import { createElement, FC, PropsWithChildren } from 'react'

type BaseHeadingProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>

export type HeadingProps = BaseHeadingProps &
  PropsWithChildren<{
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    fontSize?: utils.TextSizes
    fontColor?: Colors
  }>

export const Heading: FC<HeadingProps> = ({
  as = 'h2',
  fontSize,
  fontColor,
  children,
  className,
  ...props
}) => {
  const classes = cx(className, styles({ fontSize, fontColor }))
  return createElement(as, { className: classes, ...props }, children)
}

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
