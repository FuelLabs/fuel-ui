import { createElement } from 'react';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';
import { _unstable_createComponent } from '~/utils';

import type { DrawerBodyDef } from './defs';
import { styles } from './styles';

export const DrawerBody = _unstable_createComponent<DrawerBodyDef>(
  Components.DrawerBody,
  ({ as = 'div', ...props }) => {
    const classes = useStyles(styles, props, ['body']);
    return createElement(as, { ...props, className: classes.body.className });
  },
);
