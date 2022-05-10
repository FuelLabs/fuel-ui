import { cx } from "@fuel/css";
import * as RAlertDialog from "@radix-ui/react-alert-dialog";

import { createComponent } from "../../utils";
import * as styles from "../Dialog/styles";

export type AlertDialogContentProps = RAlertDialog.AlertDialogContentProps & {
  overlayClassName?: string;
};

export const AlertDialogContent = createComponent<AlertDialogContentProps>(
  ({ children, className, overlayClassName, ...props }) => (
    <RAlertDialog.Portal>
      <RAlertDialog.Overlay className={cx(overlayClassName, CLASSES.Overlay)} />
      <RAlertDialog.Content
        {...props}
        className={cx(className, CLASSES.Content)}
      >
        {children}
      </RAlertDialog.Content>
    </RAlertDialog.Portal>
  )
);

const CLASSES = {
  Overlay: cx("fuel_alert-dialog--overlay", styles.overlay()),
  Content: cx("fuel_alert-dialog--content", styles.content()),
};
