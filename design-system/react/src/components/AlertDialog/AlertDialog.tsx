import * as AD from '@radix-ui/react-alert-dialog';
import { createElement } from 'react';

import { AlertDialogAction } from './AlertDialogAction';
import { AlertDialogCancel } from './AlertDialogCancel';
import { AlertDialogContent } from './AlertDialogContent';
import { AlertDialogDescription } from './AlertDialogDescription';
import { AlertDialogFooter } from './AlertDialogFooter';
import { AlertDialogHeading } from './AlertDialogHeading';
import { AlertDialogTrigger } from './AlertDialogTrigger';
import type * as t from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';
import { _unstable_createComponent } from '~/utils';

export const AlertDialog = _unstable_createComponent<t.AlertDialogDef>(
  Components.AlertDialog,
  (props) => {
    const classes = useStyles(styles, props);
    const elementProps = useElementProps(props, classes.root);
    return createElement(AD.Root, elementProps);
  }
);

AlertDialog.Content = AlertDialogContent;
AlertDialog.Trigger = AlertDialogTrigger;
AlertDialog.Heading = AlertDialogHeading;
AlertDialog.Description = AlertDialogDescription;
AlertDialog.Footer = AlertDialogFooter;
AlertDialog.Cancel = AlertDialogCancel;
AlertDialog.Action = AlertDialogAction;
