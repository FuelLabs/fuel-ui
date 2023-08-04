/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactElement } from 'react';
import { Children, cloneElement } from 'react';
import { mergeProps } from 'react-aria';
import type { AsChildProps } from '~/utils/types';

import { Button } from '../components/Button';

export function useAsChild<P extends AsChildProps<Record<any, any>>>(
  { children, asChild, ...props }: P,
  defaultEl?: ReactElement,
) {
  if (asChild) {
    const childEl = Children.only(children) as ReactElement;
    return cloneElement(childEl, mergeProps(childEl?.props ?? {}, props));
  }
  if (defaultEl) return defaultEl;
  return <Button {...props}>{children}</Button>;
}
