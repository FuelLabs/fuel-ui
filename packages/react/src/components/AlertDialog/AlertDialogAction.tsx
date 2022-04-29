import { PropsWithChildren, FC } from 'react'
import * as RAlertDialog from '@radix-ui/react-alert-dialog'

export type AlertDialogActionProps =
  PropsWithChildren<RAlertDialog.AlertDialogActionProps>

export const AlertDialogAction: FC<AlertDialogActionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <RAlertDialog.Action className={className} asChild {...props}>
      {children}
    </RAlertDialog.Action>
  )
}
