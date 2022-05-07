import { styled } from "@fuel/css";
import * as RAlertDialog from "@radix-ui/react-alert-dialog";

import * as styles from "../Dialog/styles";

export type AlertDialogHeadingProps = RAlertDialog.AlertDialogTitleProps;
export const AlertDialogHeading = styled(RAlertDialog.Title, styles.heading);
