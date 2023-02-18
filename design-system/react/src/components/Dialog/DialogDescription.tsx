import { cx } from '@fuel-ui/css';

import { createComponent, createStyledElement } from '../../utils';

import * as styles from './styles';

export type DialogDescriptionProps = {
  className?: string;
};

export const DialogDescription = createComponent<DialogDescriptionProps>(
  ({ as = 'div', className, children, ...props }) => {
    const classes = cx('fuel_DialogDescription', className);
    return createStyledElement(
      as,
      styles.description,
      null,
      { ...props, className: classes },
      children
    );
  }
);
