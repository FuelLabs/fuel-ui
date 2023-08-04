import { Components } from '~/defs';
import { useStyles } from '~/hooks';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import type * as t from './defs';
import { styles } from './styles';

const _AlertDescription = _unstable_createComponent<t.AlertDescriptionDef>(
  Components.AlertDescription,
  ({ as = 'p', ...props }) => {
    const classes = useStyles(styles, props, ['description']);
    return _unstable_createEl(as, { ...props, ...classes.description });
  },
);

export const AlertDescription =
  createPolymorphicComponent<t.AlertDescriptionDef>(_AlertDescription);
