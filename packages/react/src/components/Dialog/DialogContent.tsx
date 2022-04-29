import { PropsWithChildren, forwardRef } from 'react'
import * as RDialog from '@radix-ui/react-dialog'

import * as styles from './styles'
import { Icon } from '../Icon'

export type DialogContentProps = PropsWithChildren<RDialog.DialogContentProps>

export const DialogContent = forwardRef<any, DialogContentProps>(
  ({ children, ...props }, ref) => {
    return (
      <RDialog.Portal>
        <RDialog.Overlay className={styles.overlay()} />
        <RDialog.Content className={styles.content()} {...props} ref={ref}>
          {children}
          <RDialog.Close className={styles.closeButton()}>
            <Icon icon="BiX" size={20} color="gray10" />
          </RDialog.Close>
        </RDialog.Content>
      </RDialog.Portal>
    )
  }
)
