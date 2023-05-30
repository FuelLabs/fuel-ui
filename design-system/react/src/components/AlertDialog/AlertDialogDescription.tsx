import * as RAlertDialog from '@radix-ui/react-alert-dialog';
import { createElement } from 'react';

import { _unstable_createComponent } from '../../utils';

import type { AlertDialogDescriptionDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

export type AlertDialogDescriptionProps =
  RAlertDialog.AlertDialogDescriptionProps;

export const AlertDialogDescription =
  _unstable_createComponent<AlertDialogDescriptionDef>(
    Components.AlertDialogDescription,
    ({ children, ...props }) => {
      const classes = useStyles(styles, props, ['description']);
      const elementProps = useElementProps(props, classes.description);
      return createElement(
        RAlertDialog.AlertDialogDescription,
        elementProps,
        children
      );
    }
  );
