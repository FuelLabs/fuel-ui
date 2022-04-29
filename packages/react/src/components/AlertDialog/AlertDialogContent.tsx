import { PropsWithChildren, forwardRef } from 'react'
import * as RAlertDialog from '@radix-ui/react-alert-dialog'

import * as styles from '../Dialog/styles'

export type AlertDialogContentProps =
  PropsWithChildren<RAlertDialog.AlertDialogContentProps>

export const AlertDialogContent = forwardRef<any, AlertDialogContentProps>(
  ({ children, ...props }, ref) => {
    return (
      <RAlertDialog.Portal>
        <RAlertDialog.Overlay className={styles.overlay()} />
        <RAlertDialog.Content className={styles.content()} {...props} ref={ref}>
          {children}
        </RAlertDialog.Content>
      </RAlertDialog.Portal>
    )
  }
)
