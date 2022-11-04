import { cx } from '@fuel-ui/css';

import type { HTMLProps } from '../../utils';
import { createStyledElement, createComponent } from '../../utils';
import * as styles from '../Dialog/styles';

export type AlertDialogFooterProps = HTMLProps['footer'] & {
  align?: 'start' | 'end';
};

export const AlertDialogFooter = createComponent<AlertDialogFooterProps>(
  ({ align, className, children, ...props }) => {
    const classes = cx('fuel_alert-dialog--footer', className);
    return createStyledElement(
      'footer',
      styles.footer,
      { align },
      { ...props, className: classes },
      children
    );
  }
);
