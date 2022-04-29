import { css, allColors, Colors, cx, utils } from '@fuel/css'
import { FC, PropsWithChildren } from 'react'

type ParagraphProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>

export type TextProps = ParagraphProps &
  PropsWithChildren<{
    fontSize?: utils.TextSizes
    fontColor?: Colors
  }>

export const Text: FC<TextProps> = ({
  fontSize,
  fontColor,
  children,
  className,
  ...props
}) => {
  return (
    <p {...props} className={cx(className, styles({ fontSize, fontColor }))}>
      {children}
    </p>
  )
}

const styles = css({
  my: '0',

  '& ~ &': {
    mt: '$2',
  },

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
