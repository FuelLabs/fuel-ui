import * as RAlertDialog from '@radix-ui/react-alert-dialog';
import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';

import type { AlertDialogDescriptionDef } from './defs';
import { styles } from './styles';

export type AlertDialogDescriptionProps =
  RAlertDialog.AlertDialogDescriptionProps;

export const AlertDialogDescription =
  _unstable_createComponent<AlertDialogDescriptionDef>(
    Components.AlertDialogDescription,
    (props) => {
      const classes = useStyles(styles, props, ['description']);
      const itemProps = { ...props, ...classes.description };
      return _unstable_createEl(RAlertDialog.AlertDialogDescription, itemProps);
    },
  );
