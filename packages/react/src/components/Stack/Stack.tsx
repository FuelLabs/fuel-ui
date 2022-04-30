import { createElement, ReactHTML, useMemo } from 'react'
import { css, cx } from '@fuel/css'

import { createComponent, HTMLProps } from '@/utils'

export type StackProps = HTMLProps['div'] & {
  as: keyof ReactHTML
  gap?: string
  direction?: 'row' | 'column'
}

export const Stack = createComponent<StackProps, HTMLDivElement>(
  ({
    as = 'div',
    gap = '$2',
    direction: flexDirection = 'column',
    children,
    className,
    ...props
  }) => {
    const styles = useMemo(
      () => css({ gap, flexDirection, display: 'flex' }),
      [flexDirection, gap]
    )
    const classes = cx(className, styles())
    return createElement(as, { ...props, className: classes }, children)
  }
)
