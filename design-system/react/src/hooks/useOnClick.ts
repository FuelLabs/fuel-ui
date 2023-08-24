/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PressEvents } from '@react-types/shared';
import type {
  ElementType,
  ForwardedRef,
  MutableRefObject,
  RefObject,
  SyntheticEvent,
} from 'react';
import type { AriaButtonOptions } from 'react-aria';
import { omit } from '~/utils';

import { useAriaButton } from './useButton';

const TO_OMIT = [
  'onKeyDown',
  'onKeyUp',
  'onPointerDown',
  'onMouseDown',
  'onPointerUp',
  'onDragStart',
];

type ExtraProps = {
  onClick?: React.EventHandler<SyntheticEvent<any, Event>>;
};

type AriaProps<E extends ElementType | Element> = Omit<
  AriaButtonOptions<E extends ElementType ? ElementType : ElementType<E>>,
  keyof PressEvents
>;

export type UseOnClickProps<E extends ElementType | Element> = AriaProps<E> &
  ExtraProps;

export function useOnClick<E extends ElementType | Element>(
  ref: ForwardedRef<E> | RefObject<E> | MutableRefObject<E> | null,
  props: UseOnClickProps<E>,
) {
  const { buttonProps, isPressed } = useAriaButton(
    props,
    ref as RefObject<any>,
  );
  const itemProps = omit(TO_OMIT, buttonProps);
  return {
    buttonProps: itemProps,
    isPressed,
  };
}
