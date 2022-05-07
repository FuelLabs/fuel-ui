import * as RDialog from '@radix-ui/react-dialog'
import { styled } from '@fuel-js/css'

export type DialogCloseProps = RDialog.DialogCloseProps
export const DialogClose = styled(RDialog.Close)

DialogClose.defaultProps = {
  asChild: true,
}
