import { cx } from '@fuel-ui/css';

import type { HTMLProps } from '../../utils';
import { createStyledElement, createComponent } from '../../utils';

import * as styles from './styles';

export type DialogFooterProps = HTMLProps['footer'] & {
  align?: 'start' | 'end';
};

export const DialogFooter = createComponent<DialogFooterProps>(
  ({ as = 'footer', align, className, children, ...props }) => {
    const classes = cx('fuel_dialog--footer', className);
    return createStyledElement(
      as,
      styles.footer,
      { align },
      { ...props, className: classes },
      children
    );
  }
);
