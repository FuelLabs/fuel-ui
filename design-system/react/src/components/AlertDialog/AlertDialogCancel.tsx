import * as RAlertDialog from '@radix-ui/react-alert-dialog';
import { createElement } from 'react';
import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';
import { _unstable_createComponent } from '~/utils';

import type * as t from './defs';
import { styles } from './styles';

export const AlertDialogCancel =
  _unstable_createComponent<t.AlertDialogCancelDef>(
    Components.AlertDialogCancel,
    (props) => {
      const classes = useStyles(styles, props, ['cancel']);
      const elementProps = useElementProps(props, classes.cancel);
      return createElement(RAlertDialog.AlertDialogCancel, elementProps);
    },
  );

AlertDialogCancel.defaultProps = {
  asChild: true,
};
