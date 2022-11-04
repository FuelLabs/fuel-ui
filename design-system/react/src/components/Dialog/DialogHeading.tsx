import { cx } from '@fuel-ui/css';
import * as RDialog from '@radix-ui/react-dialog';

import { createComponent, createStyledElement } from '../../utils';

import * as styles from './styles';

export type DialogHeadingProps = RDialog.DialogTitleProps;

export const DialogHeading = createComponent<DialogHeadingProps>(
  ({ className, children, ...props }) => {
    const classes = cx('fuel_dialog--heading', className);
    return createStyledElement(
      RDialog.Title,
      styles.heading,
      null,
      { ...props, className: classes },
      children
    );
  }
);
