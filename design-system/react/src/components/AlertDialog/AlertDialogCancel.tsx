import * as RAlertDialog from "@radix-ui/react-alert-dialog";
import { styled } from "@test-changesets/css";

export type AlertDialogCancelProps = RAlertDialog.AlertDialogCancelProps;
export const AlertDialogCancel = styled(RAlertDialog.Cancel);

AlertDialogCancel.defaultProps = {
  asChild: true,
};
