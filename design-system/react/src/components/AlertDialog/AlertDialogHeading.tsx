import * as RAlertDialog from '@radix-ui/react-alert-dialog';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';

import type * as t from './defs';
import { styles } from './styles';

export type AlertDialogHeadingProps = RAlertDialog.AlertDialogTitleProps;

export const AlertDialogHeading =
  _unstable_createComponent<t.AlertDialogHeadingDef>(
    Components.AlertDialogHeading,
    (props) => {
      const classes = useStyles(styles, props, ['heading']);
      return _unstable_createEl(RAlertDialog.AlertDialogTitle, {
        ...props,
        ...classes.heading,
      });
    },
  );
