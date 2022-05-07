import * as RAlertDialog from '@radix-ui/react-alert-dialog'
import { styled } from '@fuel-js/css'

export type AlertDialogActionProps = RAlertDialog.AlertDialogActionProps
export const AlertDialogAction = styled(RAlertDialog.Action)

AlertDialogAction.defaultProps = {
  asChild: true,
}
