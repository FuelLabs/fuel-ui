import { Components } from '~/defs';
import { useStyles } from '~/hooks';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import type { BadgeDef } from './defs';
import { styles } from './styles';

const _Badge = _unstable_createComponent<BadgeDef>(
  Components.Badge,
  ({ as = 'span', ...props }) => {
    const classes = useStyles(styles, props);
    return _unstable_createEl(as, { ...props, ...classes.root });
  },
);

export const Badge = createPolymorphicComponent<BadgeDef>(_Badge);
