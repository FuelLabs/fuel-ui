import { createElement } from 'react';

import type { DrawerBodyDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles } from '~/hooks';
import { _unstable_createComponent } from '~/utils';

export const DrawerBody = _unstable_createComponent<DrawerBodyDef>(
  Components.DrawerBody,
  ({ as = 'div', ...props }) => {
    const classes = useStyles(styles, props);
    return createElement(as, { ...props, className: classes.body.className });
  }
);
