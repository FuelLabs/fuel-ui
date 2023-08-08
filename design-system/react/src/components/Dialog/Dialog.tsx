/* eslint-disable @typescript-eslint/no-explicit-any */
import { Children, createContext, useContext, useRef } from 'react';
import {
  useOverlay,
  useModal,
  usePreventScroll,
  OverlayContainer,
  useDialog as useReactAriaDialog,
  OverlayProvider,
} from 'react-aria';
import { useOverlayTriggerState } from 'react-stately';
import { useStyles } from '~/hooks';
import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '~/utils';
import { Components } from '~/utils/components-list';

import { DialogClose } from './DialogClose';
import { DialogContent } from './DialogContent';
import { DialogDescription } from './DialogDescription';
import { DialogFooter } from './DialogFooter';
import { DialogHeading } from './DialogHeading';
import { DialogTrigger } from './DialogTrigger';
import type { DialogContext, DialogDef } from './defs';
import { styles } from './styles';

// ----------------------------------------------------------------------------
// Context
// ----------------------------------------------------------------------------

const ctx = createContext<DialogContext>({} as DialogContext);

export function useDialog() {
  return useContext(ctx);
}

// ----------------------------------------------------------------------------
// DialogInternal
// ----------------------------------------------------------------------------

const DialogInternal = _unstable_createComponent<DialogDef>(
  Components.Dialog,
  ({ as = 'div', children, isBlocked, isOpen, onOpenChange, ...props }) => {
    const triggerRef = useRef<HTMLButtonElement>(null);
    const state = useOverlayTriggerState({
      isOpen: isBlocked || isOpen,
      onOpenChange,
    });

    const { overlayProps, underlayProps } = useOverlay(
      {
        ...props,
        isDismissable: !isBlocked,
        isOpen: isBlocked ? true : state.isOpen,
        onClose: state.close,
      },
      triggerRef,
    );

    usePreventScroll({ isDisabled: !state.isOpen });
    const { modalProps } = useModal();
    const { dialogProps, titleProps } = useReactAriaDialog(props, triggerRef);
    const classes = useStyles(styles, props);

    const ctxProps = {
      triggerRef,
      state,
      overlayProps,
      modalProps,
      dialogProps,
      headingProps: titleProps,
      isBlocked,
    };

    const customChildren = Children.toArray(children).map((child: any) => {
      if (child?.type.id === 'DialogContent') {
        return (
          <OverlayContainer
            key={child?.type.id}
            {...(state.isOpen && classes.overlay)}
          >
            {state.isOpen && <>{child}</>}
          </OverlayContainer>
        );
      }
      return child;
    });

    const renderDialogInternal = (
      <div {...underlayProps}>
        <ctx.Provider value={ctxProps}>{customChildren}</ctx.Provider>
      </div>
    );

    return _unstable_createEl(as, classes.root, renderDialogInternal);
  },
);

// ----------------------------------------------------------------------------
// Dialog
// ----------------------------------------------------------------------------

const _Dialog = _unstable_createComponent<DialogDef>(
  Components.Dialog,
  (props) => {
    return (
      <OverlayProvider>
        <DialogInternal {...props} />
      </OverlayProvider>
    );
  },
);

export const Dialog = createPolymorphicComponent<DialogDef>(_Dialog);

Dialog.Content = DialogContent;
Dialog.Trigger = DialogTrigger;
Dialog.Heading = DialogHeading;
Dialog.Description = DialogDescription;
Dialog.Footer = DialogFooter;
Dialog.Close = DialogClose;
