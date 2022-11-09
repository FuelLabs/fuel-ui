import { cx } from '@fuel-ui/css';

import { createComponent, createStyledElement } from '../../utils';

import * as styles from './styles';

export type DialogDescriptionProps = {
  className?: string;
};

export const DialogDescription = createComponent<DialogDescriptionProps>(
  ({ className, children, ...props }) => {
    const classes = cx('fuel_dialog--description', className);
    return createStyledElement(
      'div',
      styles.description,
      null,
      { ...props, className: classes },
      children
    );
  }
);
