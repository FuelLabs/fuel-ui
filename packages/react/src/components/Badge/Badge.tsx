import { createElement } from 'react'
import { ColorKeys, cx } from '@fuel/css'

import { HTMLProps, createComponent } from '@/utils'
import * as styles from './styles'

export type BadgeVariants = 'solid' | 'outlined' | 'ghost'
export type BadgeProps = HTMLProps['span'] & {
  color?: ColorKeys
  variant?: BadgeVariants
}

export const Badge = createComponent<BadgeProps, HTMLDivElement>(
  ({ as = 'span', color, variant, children, className, ...props }) => {
    const classes = cx(
      className,
      styles.badge({
        variant,
        color: color as any,
      })
    )

    return createElement(as, { ...props, className: classes }, children)
  }
)
