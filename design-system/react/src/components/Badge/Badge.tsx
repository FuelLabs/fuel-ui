import type { ColorKeys } from '@fuel-ui/css';
import { cx } from '@fuel-ui/css';

import type { HTMLProps } from '../../utils';
import { createStyledElement, createComponent } from '../../utils';

import * as styles from './styles';

export type BadgeVariants = 'solid' | 'outlined' | 'ghost';
export type BadgeProps = HTMLProps['span'] & {
  color?: ColorKeys;
  variant?: BadgeVariants;
};

export const Badge = createComponent<BadgeProps>(
  ({ color, variant, className, children, ...props }) => {
    const classes = cx('fuel_Badge', className);
    return createStyledElement(
      'span',
      styles.badge,
      { variant, color },
      { ...props, className: classes },
      children
    );
  }
);
