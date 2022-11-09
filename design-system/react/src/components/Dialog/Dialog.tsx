/* eslint-disable @typescript-eslint/no-explicit-any */
import { cx } from '@fuel-ui/css';
import type { ModalAriaProps } from '@react-aria/overlays';
import { Children, createContext, useContext, useRef } from 'react';
import type { ReactNode } from 'react';
import type { AriaDialogProps, AriaOverlayProps } from 'react-aria';
import {
  useOverlay,
  useModal,
  usePreventScroll,
  OverlayContainer,
  useDialog as useReactAriaDialog,
  OverlayProvider,
} from 'react-aria';
import type { OverlayTriggerState } from 'react-stately';
import { useOverlayTriggerState } from 'react-stately';

import { DialogClose } from './DialogClose';
import { DialogContent } from './DialogContent';
import { DialogDescription } from './DialogDescription';
import { DialogFooter } from './DialogFooter';
import { DialogHeading } from './DialogHeading';
import { DialogTrigger } from './DialogTrigger';

import { createComponent, createStyledElement } from '~/utils';

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

const DialogInternal = createComponent<DialogProps, ObjProps>(
  ({ children, className, isBlocked, ...props }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const state = useOverlayTriggerState({});
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

    const customChildren = Children.toArray(children).map((child: any) => {
      if (child?.type.id === 'DialogContent') {
        return (
          <OverlayContainer key={child?.type.id}>
            {state.isOpen && <>{child}</>}
          </OverlayContainer>
        );
      }
      return child;
    });

    return createStyledElement(
      'div',
      null,
      null,
      { className: classes },
      <div {...underlayProps}>
        <ctx.Provider value={ctxProps}>{customChildren}</ctx.Provider>
      </div>
    );
  }
);

type ObjProps = {
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
    isBlocked?: boolean;
  };

export const Dialog = createComponent<DialogProps, ObjProps>((props) => {
  return (
    <OverlayProvider>
      <DialogInternal {...props} />
    </OverlayProvider>
  );
});

Dialog.Content = DialogContent;
Dialog.Trigger = DialogTrigger;
Dialog.Heading = DialogHeading;
Dialog.Description = DialogDescription;
Dialog.Footer = DialogFooter;
Dialog.Close = DialogClose;
