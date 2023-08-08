import * as RAlertDialog from '@radix-ui/react-alert-dialog';
import { useStyles } from '~/hooks';
import { _unstable_createComponent, _unstable_createEl } from '~/utils';
import { Components } from '~/utils/components-list';

import type * as t from './defs';
import { styles } from './styles';

export const AlertDialogTrigger =
  _unstable_createComponent<t.AlertDialogTriggerDef>(
    Components.AlertDialogTrigger,
    (props) => {
      const classes = useStyles(styles, props, ['trigger']);
      return _unstable_createEl(RAlertDialog.AlertDialogTrigger, {
        ...props,
        ...classes.trigger,
      });
    },
  );

AlertDialogTrigger.defaultProps = {
  asChild: true,
};
