import { cx, styled } from '@fuel-ui/css';
import { createElement, useRef } from 'react';
import type { ReactNode } from 'react';
import { FocusScope } from 'react-aria';

import { useDialog } from '..';
import { createComponent } from '../../utils';
import { IconButton } from '../IconButton';

import * as styles from './styles';

export type DialogContentProps = {
  overlayClassName?: string;
  closeClassName?: string;
  hideCloseButton?: boolean;
  children: ReactNode;
  className?: string;
  onClose?: () => void;
};

const Root = styled('div', styles.content);

export const DialogContent = createComponent<DialogContentProps>(
  ({ children, className }) => {
    const dialogProps = useDialog();
    const closeButtonRef = useRef<HTMLElement | null>(null);
    const classes = cx('fuel_dialog_content', className);

    if (!dialogProps.state.isOpen) return null;
    const customChildren = (
      <FocusScope contain autoFocus>
        {!dialogProps.isBlocked && (
          <IconButton
            size="xs"
            ref={closeButtonRef}
            aria-label="Close"
            icon="X"
            color="gray"
            variant="link"
            css={{ ...styles.closeButton }}
            onPress={() => dialogProps.state.toggle()}
          />
        )}
        {children}
      </FocusScope>
    );

    return createElement(
      Root,
      {
        ...dialogProps.overlayProps,
        ...dialogProps.dialogProps,
        ...dialogProps.modalProps,
        ref: dialogProps.triggerRef,
        className: classes,
      },
      customChildren
    );
  }
);

// const CLASSES = {
//   Overlay: cx('fuel_dialog--overlay', styles.overlay()),
//   Content: cx('fuel_dialog--content', styles.content()),
// };
