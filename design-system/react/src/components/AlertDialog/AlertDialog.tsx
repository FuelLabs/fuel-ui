import * as AD from '@radix-ui/react-alert-dialog';
import { useStyles } from '~/hooks';
import { _unstable_createComponent, _unstable_createEl } from '~/utils';
import { Components } from '~/utils/components-list';

import { AlertDialogAction } from './AlertDialogAction';
import { AlertDialogCancel } from './AlertDialogCancel';
import { AlertDialogContent } from './AlertDialogContent';
import { AlertDialogDescription } from './AlertDialogDescription';
import { AlertDialogFooter } from './AlertDialogFooter';
import { AlertDialogHeading } from './AlertDialogHeading';
import { AlertDialogTrigger } from './AlertDialogTrigger';
import type * as t from './defs';
import { styles } from './styles';

export const AlertDialog = _unstable_createComponent<t.AlertDialogDef>(
  Components.AlertDialog,
  (props) => {
    const classes = useStyles(styles, props);
    return _unstable_createEl(AD.Root, {
      ...props,
      ...classes.root,
    });
  },
);

AlertDialog.Content = AlertDialogContent;
AlertDialog.Trigger = AlertDialogTrigger;
AlertDialog.Heading = AlertDialogHeading;
AlertDialog.Description = AlertDialogDescription;
AlertDialog.Footer = AlertDialogFooter;
AlertDialog.Cancel = AlertDialogCancel;
AlertDialog.Action = AlertDialogAction;
