/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FocusableElement } from '@react-types/shared';
import type { AnimationProps } from 'framer-motion';
import type { DOMAttributes, ForwardedRef, MutableRefObject } from 'react';
import type { AriaOverlayProps } from 'react-aria';
import type { OverlayTriggerProps, OverlayTriggerState } from 'react-stately';
import type { AsChildProps, CreateComponent } from '~/utils';
import type { Components } from '~/utils/components-list';

import type { BoxProps } from '../Box';
import type { ButtonProps } from '../Button';
import type { IconButtonProps } from '../IconButton';

import type { DrawerBody } from './DrawerBody';
import type { DrawerClose } from './DrawerClose';
import type { DrawerContent } from './DrawerContent';
import type { DrawerTrigger } from './DrawerTrigger';

type DrawerSide = 'right' | 'left';
type DrawerSize = 'sm' | 'md' | 'lg';

// ----------------------------------------------------------------------------
// Context
// ----------------------------------------------------------------------------
export type DrawerContext = {
  ref: ForwardedRef<HTMLDivElement>;
  state?: OverlayTriggerState;
  overlayProps: DOMAttributes<FocusableElement>;
  underlayProps: DOMAttributes<FocusableElement>;
  side: DrawerSide;
  size: DrawerSize | string | number;
  shouldCloseOnClickAway?: boolean;
};

// ----------------------------------------------------------------------------
// Drawer
// ----------------------------------------------------------------------------

export type DrawerProps = OverlayTriggerProps &
  Omit<AriaOverlayProps, 'shouldCloseOnInteractOutside' | 'type' | 'side'> & {
    side?: DrawerSide;
    size?: DrawerSize | string | number;
    shouldCloseOnClickAway?: boolean;
    containerRef?: MutableRefObject<any>;
  };

type OmitProps = 'as' | 'className' | 'css';
type DrawerNS = {
  Body: typeof DrawerBody;
  CloseButton: typeof DrawerClose;
  Content: typeof DrawerContent;
  Trigger: typeof DrawerTrigger;
};

export type DrawerDef = CreateComponent<{
  type: 'div';
  component: Components.Drawer;
  namespace: DrawerNS;
  omit: OmitProps;
  element: HTMLDivElement;
  props: DrawerProps;
  styles: 'underlay' | 'content' | 'body' | 'trigger' | 'close' | 'overlay';
}>;

// ----------------------------------------------------------------------------
// DrawerBody
// ----------------------------------------------------------------------------
export type DrawerBodyProps = BoxProps;

export type DrawerBodyDef = CreateComponent<{
  type: 'div';
  component: Components.DrawerBody;
  element: HTMLDivElement;
  props: DrawerBodyProps;
}>;

// ----------------------------------------------------------------------------
// DrawerClose
// ----------------------------------------------------------------------------
export type DrawerCloseProps = Omit<IconButtonProps, 'aria-label' | 'icon'> & {
  icon?: IconButtonProps['icon'];
  ['aria-label']?: IconButtonProps['aria-label'];
};

export type DrawerCloseDef = CreateComponent<{
  type: 'button';
  component: Components.DrawerClose;
  element: HTMLButtonElement;
  props: DrawerCloseProps;
  omit: 'as';
}>;

// ----------------------------------------------------------------------------
// DrawerContent
// ----------------------------------------------------------------------------
export type DrawerContentProps = BoxProps & {
  transition?: AnimationProps['transition'];
};

export type DrawerContentNS = {
  id: string;
};

export type DrawerContentDef = CreateComponent<{
  type: 'div';
  component: Components.DrawerContent;
  element: HTMLDivElement;
  props: DrawerContentProps;
  namespace: DrawerContentNS;
}>;

// ----------------------------------------------------------------------------
// DrawerTrigger
// ----------------------------------------------------------------------------
export type DrawerTriggerProps = AsChildProps<ButtonProps>;

export type DrawerTriggerDef = CreateComponent<{
  type: 'button';
  component: Components.DrawerTrigger;
  element: HTMLButtonElement;
  props: DrawerTriggerProps;
  omit: 'as';
}>;
