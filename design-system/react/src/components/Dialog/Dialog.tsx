import { cx, styled } from '@fuel-ui/css';
import type { ModalAriaProps } from '@react-aria/overlays';
import { createContext, useContext, useRef, createElement } from 'react';
import type { ReactNode } from 'react';
import {
  useOverlay,
  useModal,
  usePreventScroll,
  OverlayContainer,
  OverlayProvider,
  useDialog as useReactAriaDialog,
} from 'react-aria';
import type { AriaDialogProps, AriaOverlayProps } from 'react-aria';
import type { OverlayTriggerState } from 'react-stately';

import { DialogClose } from './DialogClose';
import { DialogContent } from './DialogContent';
import { DialogDescription } from './DialogDescription';
import { DialogFooter } from './DialogFooter';
import { DialogHeading } from './DialogHeading';
import { DialogTrigger } from './DialogTrigger';

import { createComponent } from '~/utils';

export type DialogContext = {
  state: OverlayTriggerState;
  triggerRef?: React.MutableRefObject<HTMLDivElement | null>;
  overlayProps?: React.HTMLAttributes<HTMLElement>;
  modalProps?: ModalAriaProps;
  dialogProps?: React.HTMLAttributes<HTMLElement>;
  headingProps?: React.HTMLAttributes<HTMLElement>;
  isBlocked?: boolean;
};

const ctx = createContext<DialogContext>({} as DialogContext);

export function useDialog() {
  return useContext(ctx);
}

type ObjProps = {
  Provider: typeof OverlayProvider;
  Content: typeof DialogContent;
  Trigger: typeof DialogTrigger;
  Heading: typeof DialogHeading;
  Description: typeof DialogDescription;
  Footer: typeof DialogFooter;
  Close: typeof DialogClose;
};

export type DialogProps = AriaOverlayProps &
  AriaDialogProps & {
    children: ReactNode;
    state: OverlayTriggerState;
    isBlocked?: boolean;
  };

const DialogRoot = styled('div');

export const Dialog = createComponent<DialogProps, ObjProps>(
  ({ children, className, isBlocked, state, ...props }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const { overlayProps, underlayProps } = useOverlay(
      {
        ...props,
        isDismissable: !isBlocked,
        isOpen: isBlocked ? true : state.isOpen,
        onClose: state.close,
      },
      ref
    );

    usePreventScroll({ isDisabled: !state.isOpen });
    const { modalProps } = useModal();
    const { dialogProps, titleProps } = useReactAriaDialog(props, ref);
    const classes = cx('fuel_dialog', className);

    const ctxProps = {
      ref,
      state,
      overlayProps,
      modalProps,
      dialogProps,
      headingProps: titleProps,
      isBlocked,
    };

    if (!state.isOpen) return null;
    const customChildren = (
      <OverlayContainer>
        -
        <div {...underlayProps}>
          <ctx.Provider value={ctxProps}>{children}</ctx.Provider>;
        </div>
      </OverlayContainer>
    );

    // What is the difference between return createElement(...)
    // and just return <DialogRoot>...</>
    return createElement(DialogRoot, { className: classes }, customChildren);
  }
);

Dialog.Provider = OverlayProvider;
Dialog.Content = DialogContent;
Dialog.Trigger = DialogTrigger;
Dialog.Heading = DialogHeading;
Dialog.Description = DialogDescription;
Dialog.Footer = DialogFooter;
Dialog.Close = DialogClose;
