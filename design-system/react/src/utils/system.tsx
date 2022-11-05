/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from '@fuel-ui/css';
import type { ForwardedRef, ReactElement, ReactNode } from 'react';
import { useMemo, forwardRef } from 'react';

import type { BaseProps } from './types';

export function createComponent<
  Props,
  ObjProps = unknown,
  ToOmit = unknown,
  HTMLElement = any,
  FinalProps = ToOmit extends string
    ? Omit<BaseProps<Props>, ToOmit>
    : BaseProps<Props>
>(
  render: (
    props: FinalProps & { ref: ForwardedRef<HTMLElement> }
  ) => ReactElement | null
) {
  const Component = forwardRef<HTMLElement, FinalProps>((props, ref) =>
    render({ ref, ...props })
  );
  return Component as typeof Component & ObjProps;
}

export function createStyledElement(
  type: any,
  style: any,
  styleProps: any,
  props: any,
  children?: ReactNode
) {
  const Component = useMemo(() => styled(type, style), []);
  return (
    <Component {...styleProps} {...props}>
      {children}
    </Component>
  );
}
