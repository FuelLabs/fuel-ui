import { Components } from '~/defs';
import { useStyles } from '~/hooks';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import type { DialogDescriptionDef } from './defs';
import { styles } from './styles';

const _DialogDescription = _unstable_createComponent<DialogDescriptionDef>(
  Components.DialogDescription,
  ({ as = 'div', ...props }) => {
    const classes = useStyles(styles, props, ['description']);
    return _unstable_createEl(as, { ...props, ...classes.description });
  },
);

export const DialogDescription =
  createPolymorphicComponent<DialogDescriptionDef>(_DialogDescription);
