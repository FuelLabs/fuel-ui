import * as RAlertDialog from '@radix-ui/react-alert-dialog';
import { useStyles } from '~/hooks';
import { _unstable_createComponent, _unstable_createEl } from '~/utils';
import { Components } from '~/utils/components-list';

import type * as t from './defs';
import { styles } from './styles';

export const AlertDialogAction =
  _unstable_createComponent<t.AlertDialogActionDef>(
    Components.AlertDialogAction,
    (props) => {
      const classes = useStyles(styles, props, ['action']);
      return _unstable_createEl(RAlertDialog.AlertDialogAction, {
        ...props,
        ...classes.action,
      });
    },
  );

AlertDialogAction.defaultProps = {
  asChild: true,
};
