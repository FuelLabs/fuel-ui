import * as RAlertDialog from '@radix-ui/react-alert-dialog';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';
import { _unstable_createComponent, _unstable_createEl } from '~/utils';

import type * as t from './defs';
import { styles } from './styles';

export const AlertDialogCancel =
  _unstable_createComponent<t.AlertDialogCancelDef>(
    Components.AlertDialogCancel,
    (props) => {
      const classes = useStyles(styles, props, ['cancel']);
      return _unstable_createEl(RAlertDialog.AlertDialogCancel, {
        ...props,
        ...classes.cancel,
      });
    },
  );

AlertDialogCancel.defaultProps = {
  asChild: true,
};
