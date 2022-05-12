import { cx, styled } from "@fuel/css";
import * as RAlertDialog from "@radix-ui/react-alert-dialog";

import { createComponent } from "../../utils";
import * as styles from "../Dialog/styles";

export type AlertDialogContentProps = RAlertDialog.AlertDialogContentProps & {
  overlayClassName?: string;
};

const Root = styled(RAlertDialog.Content);
export const AlertDialogContent = createComponent<AlertDialogContentProps>(
  ({ children, className, overlayClassName, css, ...props }) => (
    <RAlertDialog.Portal>
      <RAlertDialog.Overlay className={cx(overlayClassName, CLASSES.Overlay)} />
      <Root {...props} css={css} className={cx(className, CLASSES.Content)}>
        {children}
      </Root>
    </RAlertDialog.Portal>
  )
);

const CLASSES = {
  Overlay: cx("fuel_alert-dialog--overlay", styles.overlay()),
  Content: cx("fuel_alert-dialog--content", styles.content()),
};
