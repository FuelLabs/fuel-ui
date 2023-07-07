/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from 'react';
import type { AriaOverlayProps, AriaDialogProps, ModalAria } from 'react-aria';
import type { OverlayTriggerState } from 'react-stately';

import type { ButtonProps } from '../Button';

import type { DialogClose } from './DialogClose';
import type { DialogContent } from './DialogContent';
import type { DialogDescription } from './DialogDescription';
import type { DialogFooter } from './DialogFooter';
import type { DialogHeading } from './DialogHeading';
import type { DialogTrigger } from './DialogTrigger';

import type { Components } from '~/defs';
import type { CreateComponent, HTMLProps } from '~/utils';

// ----------------------------------------------------------------------------
// Context
// ----------------------------------------------------------------------------

export type DialogContext = {
  state: OverlayTriggerState;
  triggerRef?: React.MutableRefObject<HTMLDivElement | null>;
  overlayProps?: React.HTMLAttributes<HTMLElement>;
  modalProps?: ModalAria['modalProps'];
  dialogProps?: React.HTMLAttributes<HTMLElement>;
  headingProps?: React.HTMLAttributes<HTMLElement>;
  isBlocked?: boolean;
};

// ----------------------------------------------------------------------------
// Dialog
// ----------------------------------------------------------------------------
export type DialogProps = AriaOverlayProps &
  AriaDialogProps & {
    children: ReactNode;
    isBlocked?: boolean;
    onOpenChange?: (isOpen: boolean) => any;
  };

export type DialogNameSpace = {
  Content: typeof DialogContent;
  Trigger: typeof DialogTrigger;
  Heading: typeof DialogHeading;
  Description: typeof DialogDescription;
  Footer: typeof DialogFooter;
  Close: typeof DialogClose;
};

export type DialogDef = CreateComponent<{
  type: 'div';
  component: Components.Dialog;
  element: HTMLDivElement;
  props: DialogProps;
  namespace: DialogNameSpace;
  styles:
    | 'root'
    | 'close'
    | 'content'
    | 'heading'
    | 'description'
    | 'footer'
    | 'overlay'
    | 'trigger';
}>;

// ----------------------------------------------------------------------------
// DialogContent
// ----------------------------------------------------------------------------
export type DialogContentProps = {
  overlayClassName?: string;
  closeClassName?: string;
  hideCloseButton?: boolean;
  children: ReactNode;
  className?: string;
  onClose?: () => void;
};

export type DialogContentNS = {
  id: string;
};

export type DialogContentDef = CreateComponent<{
  type: 'div';
  component: Components.DialogContent;
  element: HTMLDivElement;
  props: DialogContentProps;
  namespace: DialogContentNS;
  styles: 'content';
}>;

// ----------------------------------------------------------------------------
// DialogTrigger
// ----------------------------------------------------------------------------
export type DialogTriggerProps = ButtonProps & {
  asChild?: boolean;
};

export type DialogTriggerNS = {
  id: string;
};

export type DialogTriggerDef = CreateComponent<{
  type: 'button';
  component: Components.DialogTrigger;
  element: HTMLButtonElement;
  props: DialogTriggerProps;
  namespace: DialogTriggerNS;
}>;

// ----------------------------------------------------------------------------
// DialogHeading
// ----------------------------------------------------------------------------
export type DialogHeadingProps = {
  children?: ReactNode;
  className?: string;
};

export type DialogHeadingDef = CreateComponent<{
  type: 'h2';
  component: Components.DialogHeading;
  element: HTMLHeadingElement;
  props: DialogHeadingProps;
  styles: 'heading';
}>;

// ----------------------------------------------------------------------------
// DialogDescription
// ----------------------------------------------------------------------------
export type DialogDescriptionProps = {
  className?: string;
};

export type DialogDescriptionDef = CreateComponent<{
  type: 'div';
  component: Components.DialogDescription;
  element: HTMLDivElement;
  props: DialogDescriptionProps;
  styles: 'description';
}>;

// ----------------------------------------------------------------------------
// DialogFooter
// ----------------------------------------------------------------------------
export type DialogFooterProps = HTMLProps['footer'] & {
  align?: 'start' | 'end';
};

export type DialogFooterDef = CreateComponent<{
  type: 'footer';
  component: Components.DialogFooter;
  element: HTMLDivElement;
  props: DialogFooterProps;
  styles: 'footer';
}>;

// ----------------------------------------------------------------------------
// DialogClose
// ----------------------------------------------------------------------------
export type DialogCloseProps = ButtonProps & {
  asChild?: boolean;
};

export type DialogCloseNS = {
  id: string;
};

export type DialogCloseDef = CreateComponent<{
  type: 'button';
  component: Components.DialogClose;
  element: HTMLButtonElement;
  props: DialogCloseProps;
  namespace: DialogCloseNS;
  styles: 'close';
}>;
