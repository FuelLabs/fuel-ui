import { cx, styled } from '@fuel/css'

import * as styles from './styles'

import type { HTMLProps } from '@/utils'
import { createComponent } from '@/utils'

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
