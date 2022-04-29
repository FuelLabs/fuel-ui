import { css, cx } from '@fuel/css'
import { createElement, FC, ReactHTML, useMemo } from 'react'

type BaseDivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export type StackProps = BaseDivProps & {
  as: keyof ReactHTML
  gap?: string
  direction?: 'row' | 'column'
}

export const Stack: FC<StackProps> = ({
  as = 'div',
  gap = '$2',
  direction = 'column',
  children,
  className,
  ...props
}) => {
  const styles = useMemo(
    () =>
      css({
        display: 'flex',
        flexDirection: direction,
        gap,
      }),
    [direction, gap]
  )
  const classes = cx(className, styles())
  return createElement(as, { className: classes, ...props }, children)
}
