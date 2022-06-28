import * as RAlertDialog from "@radix-ui/react-alert-dialog";
import { cx, styled } from "@test-changesets/css";
import { createElement } from "react";

import { createComponent } from "../../utils";
import * as styles from "../Dialog/styles";

export type AlertDialogDescriptionProps =
  RAlertDialog.AlertDialogDescriptionProps;

const Root = styled(RAlertDialog.Description, styles.description);

export const AlertDialogDescription =
  createComponent<AlertDialogDescriptionProps>(
    ({ className, children, ...props }) => {
      const classes = cx(
        "fuel_alert-dialog--description",
        className,
        styles.description()
      );
      return createElement(Root, { ...props, className: classes }, children);
    }
  );
