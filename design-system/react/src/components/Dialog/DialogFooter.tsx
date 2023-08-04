import { Components } from '~/defs';
import { useStyles } from '~/hooks';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import type { DialogDescriptionDef, DialogFooterDef } from './defs';
import { styles } from './styles';

const _DialogFooter = _unstable_createComponent<DialogFooterDef>(
  Components.DialogFooter,
  ({ as = 'footer', ...props }) => {
    const classes = useStyles(styles, props, ['footer']);
    return _unstable_createEl(as, { ...props, ...classes.footer });
  },
);

export const DialogFooter =
  createPolymorphicComponent<DialogDescriptionDef>(_DialogFooter);
