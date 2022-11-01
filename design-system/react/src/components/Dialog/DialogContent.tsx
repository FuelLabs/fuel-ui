// import { cx, styled } from '@fuel-ui/css';
import { useRef } from 'react';
import type { ReactNode } from 'react';
import { FocusScope } from 'react-aria';

import { useDialog } from '..';
import { createComponent } from '../../utils';
import { IconButton } from '../IconButton';

// import * as styles from './styles';

export type DialogContentProps = {
  overlayClassName?: string;
  closeClassName?: string;
  hideCloseButton?: boolean;
  children: ReactNode;
  className?: string;
  onClose?: () => void;
};

// const Root = styled('div');

export const DialogContent = createComponent<DialogContentProps>(
  ({ children }) => {
    const dialogProps = useDialog();
    const closeButtonRef = useRef<HTMLElement | null>(null);
    return (
      <div
        {...dialogProps.overlayProps}
        {...dialogProps.dialogProps}
        {...dialogProps.modalProps}
        ref={dialogProps.triggerRef}
      >
        <FocusScope contain autoFocus>
          {!dialogProps.isBlocked && (
            <IconButton
              size="xs"
              ref={closeButtonRef}
              aria-label="Close"
              icon="X"
              color="gray"
              variant="link"
            />
          )}
          {children}
        </FocusScope>
      </div>
    );
  }
);

// const CLASSES = {
//   verlay: cx('fuel_dialog--overlay', styles.overlay()),
//   Content: cx('fuel_dialog--content', styles.content()),
// };
