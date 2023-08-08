import { useStyles } from '~/hooks';
import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '~/utils';
import { Components } from '~/utils/components-list';

import type { DrawerBodyDef } from './defs';
import { styles } from './styles';

const _DrawerBody = _unstable_createComponent<DrawerBodyDef>(
  Components.DrawerBody,
  ({ as = 'div', ...props }) => {
    const classes = useStyles(styles, props, ['body']);
    return _unstable_createEl(as, { ...props, ...classes.body });
  },
);

export const DrawerBody =
  createPolymorphicComponent<DrawerBodyDef>(_DrawerBody);
