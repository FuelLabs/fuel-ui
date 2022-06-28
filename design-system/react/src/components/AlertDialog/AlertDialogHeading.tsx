import * as RAlertDialog from "@radix-ui/react-alert-dialog";
import { cx, styled } from "@test-changesets/css";
import { createElement } from "react";

import { createComponent } from "../../utils";
import * as styles from "../Dialog/styles";

export type AlertDialogHeadingProps = RAlertDialog.AlertDialogTitleProps;

const Root = styled(RAlertDialog.Title, styles.heading);

export const AlertDialogHeading = createComponent<AlertDialogHeadingProps>(
  ({ className, children, ...props }) => {
    const classes = cx("fuel_alert-dialog--heading", className);
    return createElement(Root, { ...props, className: classes }, children);
  }
);
