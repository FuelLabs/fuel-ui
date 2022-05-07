import * as RAlertDialog from '@radix-ui/react-alert-dialog'

import * as styles from '../Dialog/styles'
import { createComponent } from '@/utils'

export type AlertDialogContentProps = RAlertDialog.AlertDialogContentProps
export const AlertDialogContent = createComponent<AlertDialogContentProps>(
  ({ children, ...props }) => (
    <RAlertDialog.Portal>
      <RAlertDialog.Overlay className={styles.overlay()} />
      <RAlertDialog.Content {...props} className={styles.content()}>
        {children}
      </RAlertDialog.Content>
    </RAlertDialog.Portal>
  )
)
