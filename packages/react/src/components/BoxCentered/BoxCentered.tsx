import { createElement } from 'react'
import { css, cx } from '@fuel-js/css'

import { HTMLProps, createComponent } from '@/utils'

export type BoxCenteredProps = HTMLProps['div'] & {
  /**
   * max-width: '100vh
   */
  minWS?: boolean
  /**
   * max-height: '100vh
   */
  minHS?: boolean
}

export const BoxCentered = createComponent<BoxCenteredProps, HTMLDivElement>(
  ({ as = 'div', children, minWS, minHS, className, ...props }) => {
    const classes = cx(className, styles({ minWS, minHS }))
    return createElement(as, { ...props, className: classes }, children)
  }
)

const styles = css({
  is: ['centered'],
  variants: {
    minWS: {
      true: {
        minW: '$screenW',
      },
    },
    minHS: {
      true: {
        minH: '$screenH',
      },
    },
  },
})
