import { PropsWithChildren, FC } from 'react'
import * as RAlertDialog from '@radix-ui/react-alert-dialog'

export type AlertDialogCancelProps =
  PropsWithChildren<RAlertDialog.AlertDialogCancelProps>

export const AlertDialogCancel: FC<AlertDialogCancelProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <RAlertDialog.Cancel className={className} asChild {...props}>
      {children}
    </RAlertDialog.Cancel>
  )
}
