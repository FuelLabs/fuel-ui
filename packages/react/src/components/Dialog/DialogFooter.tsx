import { createComponent, HTMLProps } from '@/utils'
import { cx, styled } from '@fuel-js/css'

import * as styles from './styles'

export type DialogFooterProps = HTMLProps['footer'] & {
  align?: 'start' | 'end'
}

const Root = styled('footer')

export const DialogFooter = createComponent<DialogFooterProps>(
  ({ align, className, ...props }) => {
    const classes = cx(className, styles.footer({ align }))
    return <Root {...props} className={classes} />
  }
)
