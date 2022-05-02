import { createComponent, HTMLProps } from '@/utils'
import { cx } from '@fuel-js/css'
import { createElement } from 'react'

import * as styles from './styles'

export type DialogFooterProps = HTMLProps['footer'] & {
  align?: 'start' | 'end'
}

export const DialogFooter = createComponent<DialogFooterProps, HTMLDivElement>(
  ({ as = 'footer', align, className, children, ...props }) => {
    const classes = cx(className, styles.footer({ align }))
    return createElement(as, { ...props, className: classes }, children)
  }
)
