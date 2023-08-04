import { createElement } from 'react';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';
import { _unstable_createComponent, createPolymorphicComponent } from '~/utils';

import type { DrawerBodyDef } from './defs';
import { styles } from './styles';

const _DrawerBody = _unstable_createComponent<DrawerBodyDef>(
  Components.DrawerBody,
  ({ as = 'div', ...props }) => {
    const classes = useStyles(styles, props, ['body']);
    return createElement(as, { ...props, ...classes.body });
  },
);

export const DrawerBody =
  createPolymorphicComponent<DrawerBodyDef>(_DrawerBody);
