/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ElementRef } from 'react';
import { useButton } from 'react-aria';
import { omit } from '~/utils';

type UseButtonOptions = Parameters<typeof useButton>[0];

const TO_OMIT = [
  'onKeyDown',
  'onKeyUp',
  'onClick',
  'onPointerDown',
  'onMouseDown',
  'onPointerUp',
  'onDragStart',
];

export function useOnPress<
  T extends Record<any, any>,
  E = ElementRef<'button'>,
>(props: T, ref: E, customAriaProps?: UseButtonOptions) {
  const { buttonProps, isPressed } = useButton(
    { ...props, ...(customAriaProps || {}) },
    ref as any,
  );

  const role = props.role || buttonProps.role || 'button';
  const finalProps = {
    role,
    ...(role !== 'link' && { 'aria-pressed': isPressed }),
    ...omit(TO_OMIT, buttonProps),
    onClick(e: any) {
      if (typeof props.onClick !== 'undefined') {
        props.onClick?.(e);
        return;
      }
      props.onPress?.(e);
    },
  };

  return {
    buttonProps: finalProps,
    isPressed,
  };
}
