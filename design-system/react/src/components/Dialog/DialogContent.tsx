import { cx, styled } from "@fuel/css";
import * as RDialog from "@radix-ui/react-dialog";

import { createComponent } from "../../utils";
import { Icon } from "../Icon";

import * as styles from "./styles";

export type DialogContentProps = RDialog.DialogContentProps & {
  overlayClassName?: string;
  closeClassName?: string;
};

const Root = styled(RDialog.Content);
export const DialogContent = createComponent<DialogContentProps>(
  ({
    children,
    className,
    overlayClassName,
    closeClassName,
    css,
    ...props
  }) => (
    <RDialog.Portal>
      <RDialog.Overlay className={cx(overlayClassName, CLASSES.Overlay)} />
      <Root {...props} css={css} className={cx(className, CLASSES.Content)}>
        {children}
        <RDialog.Close className={cx(closeClassName, styles.closeButton())}>
          <Icon icon="BiX" size={20} color="gray10" />
        </RDialog.Close>
      </Root>
    </RDialog.Portal>
  )
);

const CLASSES = {
  Overlay: cx("fuel_dialog--overlay", styles.overlay()),
  Content: cx("fuel_dialog--content", styles.content()),
};
