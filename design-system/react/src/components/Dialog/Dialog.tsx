/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Children,
  createContext,
  createElement,
  useContext,
  useRef,
} from 'react';
import {
  useOverlay,
  useModal,
  usePreventScroll,
  OverlayContainer,
  useDialog as useReactAriaDialog,
  OverlayProvider,
} from 'react-aria';
import { useOverlayTriggerState } from 'react-stately';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';
import { _unstable_createComponent, createPolymorphicComponent } from '~/utils';

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

export const DialogCtx = createContext<DialogContext>({} as DialogContext);

export function useDialog() {
  return useContext(DialogCtx);
}

// ----------------------------------------------------------------------------
// DialogInternal
// ----------------------------------------------------------------------------

const DialogInternal = _unstable_createComponent<DialogDef>(
  Components.Dialog,
  ({ as = 'div', children, isBlocked, isOpen, onOpenChange, ...props }) => {
    const ref = useRef<HTMLButtonElement>(null);
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
      ref,
    );

    usePreventScroll({ isDisabled: !state.isOpen });
    const { modalProps } = useModal();
    const { dialogProps, titleProps } = useReactAriaDialog(props, ref);
    const classes = useStyles(styles, props);

    const ctxProps = {
      ref,
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
            {...(state.isOpen && { className: classes.overlay.className })}
          >
            {state.isOpen && <>{child}</>}
          </OverlayContainer>
        );
      }
      return child;
    });

    const renderDialogInternal = (
      <div {...underlayProps}>
        <DialogCtx.Provider value={ctxProps}>
          {customChildren}
        </DialogCtx.Provider>
      </div>
    );

    return createElement(as, props, renderDialogInternal);
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
