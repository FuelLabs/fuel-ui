import { styled } from "@test-changeset/css";
import * as RAlertDialog from "@radix-ui/react-alert-dialog";

export type AlertDialogActionProps = RAlertDialog.AlertDialogActionProps;
export const AlertDialogAction = styled(RAlertDialog.Action);

AlertDialogAction.defaultProps = {
  asChild: true,
};
