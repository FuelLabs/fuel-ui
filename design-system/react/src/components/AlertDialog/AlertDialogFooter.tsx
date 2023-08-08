import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import type { AlertDialogFooterDef } from './defs';
import { styles } from './styles';

const _AlertDialogFooter = _unstable_createComponent<AlertDialogFooterDef>(
  Components.AlertDialogFooter,
  ({ as = 'footer', ...props }) => {
    const classes = useStyles(styles, props, ['footer']);
    return _unstable_createEl(as, {
      ...props,
      ...classes.footer,
    });
  },
);

export const AlertDialogFooter =
  createPolymorphicComponent<AlertDialogFooterDef>(_AlertDialogFooter);
