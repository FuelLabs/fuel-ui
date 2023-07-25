/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ElementRef } from 'react';
import { useRef } from 'react';
import { mergeProps, useButton } from 'react-aria';

import { omit } from '~/utils';

type UseButtonOptions = Parameters<typeof useButton>[0];

function getDefProps(props: any) {
  const toOmit = ['onClick'];

  return {
    ...omit(toOmit, props),
    onPress(e: React.MouseEvent<HTMLButtonElement>) {
      if (
        typeof props.onClick !== 'undefined' &&
        typeof props.onPress === 'undefined'
      ) {
        props.onClick(e);
        return;
      }
      props.onPress?.(e as any);
    },
  };
}

export function useOnPress<
  T extends Record<any, any>,
  E = ElementRef<'button'>
>(props: T, customAriaProps?: UseButtonOptions) {
  const innerRef = useRef<E>(null);
  const defaultProps = getDefProps(props);
  const { buttonProps, isPressed } = useButton(
    { ...defaultProps, ...(customAriaProps || {}) },
    innerRef as any
  );

  const role = props.role || buttonProps.role || 'button';
  const finalProps = mergeProps(buttonProps, {
    role,
    ...(role !== 'link' && { 'aria-pressed': isPressed }),
  });

  return {
    buttonProps: finalProps,
    isPressed,
    ref: innerRef,
  };
}
