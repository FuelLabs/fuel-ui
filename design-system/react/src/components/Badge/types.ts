import type { ColorKeys } from '@fuel-ui/css';

import type { HTMLProps } from '~/utils';

export type BadgeVariants = 'solid' | 'outlined' | 'ghost';
export type BadgeProps = HTMLProps['span'] & {
  color?: ColorKeys;
  variant?: BadgeVariants;
};

export type BadgeDef = {
  props: BadgeProps;
  styles: 'root';
};
