import { PropsWithChildren, FC } from 'react'
import * as RAlertDialog from '@radix-ui/react-alert-dialog'

export type AlertDialogTriggerProps =
  PropsWithChildren<RAlertDialog.AlertDialogTriggerProps>

export const AlertDialogTrigger: FC<AlertDialogTriggerProps> = ({
  children,
  ...props
}) => {
  return (
    <RAlertDialog.Trigger asChild {...props}>
      {children}
    </RAlertDialog.Trigger>
  )
}
