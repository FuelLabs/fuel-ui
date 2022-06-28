import * as RAlertDialog from "@radix-ui/react-alert-dialog";
import { styled } from "@test-changesets/css";

export type AlertDialogTriggerProps = RAlertDialog.AlertDialogTriggerProps;
export const AlertDialogTrigger = styled(RAlertDialog.AlertDialogTrigger);

AlertDialogTrigger.defaultProps = {
  asChild: true,
};
