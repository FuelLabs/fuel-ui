/* eslint-disable @typescript-eslint/no-explicit-any */
import { mergeProps } from 'react-aria';
import { omit } from '~/utils';

export const OMIT_FOR_DOM = [
  'as',
  'direction',
  'align',
  'justify',
  'wrap',
  'basis',
  'grow',
  'shrink',
  'gap',
  'status',
  'variant',
  'color',
  'size',
  'css',
  'isDisabled',
  'onPress',
  'isLoading',
  'isDisabled',
  'isLink',
  'leftIcon',
  'leftIconAriaLabel',
  'rightIcon',
  'rightIconAriaLabel',
  'minWS',
  'minHS',
  'justIcon',
  'iconSize',
  'onPressStart',
];

export function useElementProps<P extends any[]>(...props: P): P[0] {
  const res = omit(OMIT_FOR_DOM, mergeProps<P>(...props) as any) as P[0];
  const disabled = props.some((p) => p?.isDisabled || p?.isLoading);
  return { ...res, ...(disabled && { 'aria-disabled': true, disabled: true }) };
}
