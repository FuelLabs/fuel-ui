import { styled } from "@fuel/css";
import * as RAlertDialog from "@radix-ui/react-alert-dialog";

import * as styles from "../Dialog/styles";

export type AlertDialogDescriptionProps = RAlertDialog.AlertDialogTitleProps;
export const AlertDialogDescription = styled(
  RAlertDialog.Description,
  styles.description
);
