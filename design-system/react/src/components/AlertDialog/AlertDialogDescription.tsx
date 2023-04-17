import { cx } from '@fuel-ui/css';
import * as RAlertDialog from '@radix-ui/react-alert-dialog';

import { createComponent, createStyledElement } from '../../utils';
import * as styles from '../Dialog/styles';

export type AlertDialogDescriptionProps =
  RAlertDialog.AlertDialogDescriptionProps;

export const AlertDialogDescription =
  createComponent<AlertDialogDescriptionProps>(
    ({ className, children, ...props }) => {
      const classes = cx('fuel_AlertDialogDescription', className);
      return createStyledElement(
        RAlertDialog.Description,
        styles.description,
        null,
        { ...props, className: classes },
        children
      );
    }
  );
