import { cx, styled } from '@fuel-ui/css';
import * as RDialog from '@radix-ui/react-dialog';

import { createComponent } from '../../utils';
import { IconButton } from '../IconButton';

import * as styles from './styles';

export type DialogContentProps = RDialog.DialogContentProps & {
  overlayClassName?: string;
  closeClassName?: string;
  hideCloseButton?: boolean;
};

const Root = styled(RDialog.Content);
export const DialogContent = createComponent<DialogContentProps>(
  ({
    children,
    className,
    overlayClassName,
    closeClassName,
    hideCloseButton,
    css,
    ...props
  }) => (
    <RDialog.Portal>
      <RDialog.Overlay className={cx(overlayClassName, CLASSES.Overlay)} />
      <Root {...props} css={css} className={cx(className, CLASSES.Content)}>
        {children}
        {!hideCloseButton && (
          <RDialog.Close
            className={cx(closeClassName, styles.closeButton())}
            asChild
          >
            <IconButton
              size="xs"
              aria-label="Close"
              icon="X"
              color="gray"
              variant="link"
            />
          </RDialog.Close>
        )}
      </Root>
    </RDialog.Portal>
  )
);

const CLASSES = {
  Overlay: cx('fuel_dialog--overlay', styles.overlay()),
  Content: cx('fuel_dialog--content', styles.content()),
};
