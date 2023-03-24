import type { ColorKeys } from '@fuel-ui/css';

import type { Components } from '~/types';
import type { CreateComponent, HTMLProps } from '~/utils';

export type BadgeVariants = 'solid' | 'outlined' | 'ghost';
export type BadgeProps = HTMLProps['span'] & {
  color?: ColorKeys;
  variant?: BadgeVariants;
};

export type BadgeDef = CreateComponent<{
  type: 'span';
  component: Components.Badge;
  element: HTMLSpanElement;
  props: BadgeProps;
  styles: 'root';
}>;
