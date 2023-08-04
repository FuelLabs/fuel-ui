/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ThemeUtilsCSS } from '@fuel-ui/css';
import type { FocusableProps, PressEvents } from '@react-types/shared';
import type { ReactNode } from 'react';

type Children = ReactNode;
export type HTMLProps = JSX.IntrinsicElements;

export type BaseProps<O> = {
  as?: any;
  css?: ThemeUtilsCSS;
  className?: string;
  children?: Children;
  [index: `data-${string}`]: unknown;
} & O;

export type PressProps = PressEvents &
  FocusableProps & {
    /**
     * @deprecated Use onPress instead. onPress support Enter and Space keyboard.
     * You're able to use just one or another, don't use onClick and onPress together
     */
    onClick?: HTMLProps['button']['onClick'];
  };

export type AsChildProps<P extends Record<any, any>> = P & {
  asChild?: boolean;
  children: ReactNode;
};
