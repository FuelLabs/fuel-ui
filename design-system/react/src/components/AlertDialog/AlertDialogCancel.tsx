import { styled } from "@test-changeset/css";
import * as RAlertDialog from "@radix-ui/react-alert-dialog";

export type AlertDialogCancelProps = RAlertDialog.AlertDialogCancelProps;
export const AlertDialogCancel = styled(RAlertDialog.Cancel);

AlertDialogCancel.defaultProps = {
  asChild: true,
};
