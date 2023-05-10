import { styled } from '@fuel-stitches/react';
import { cx } from '@fuel-ui/css';
import * as RAlertDialog from '@radix-ui/react-alert-dialog';

import { createComponent } from '../../utils';
import * as styles from '../Dialog/styles';

export type AlertDialogDescriptionProps =
  RAlertDialog.AlertDialogDescriptionProps;

const Root = styled(RAlertDialog.Description);

export const AlertDialogDescription =
  createComponent<AlertDialogDescriptionProps>(
    ({ className, children, ...props }) => {
      const classes = cx(
        'fuel_AlertDialogDescription',
        className,
        styles.description()
      );
      return (
        <Root as="div" className={classes} {...props}>
          {children}
        </Root>
      );
    }
  );
