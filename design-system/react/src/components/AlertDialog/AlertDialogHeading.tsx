import { cx } from '@fuel-ui/css';
import * as RAlertDialog from '@radix-ui/react-alert-dialog';

import { createComponent, createStyledElement } from '../../utils';
import * as styles from '../Dialog/styles';

export type AlertDialogHeadingProps = RAlertDialog.AlertDialogTitleProps;

export const AlertDialogHeading = createComponent<AlertDialogHeadingProps>(
  ({ className, children, ...props }) => {
    const classes = cx('fuel_AlertDialogHeading', className);
    return createStyledElement(
      RAlertDialog.Title,
      styles.heading,
      null,
      { ...props, className: classes },
      children
    );
  }
);
