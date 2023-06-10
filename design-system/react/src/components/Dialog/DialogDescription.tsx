import { createElement } from 'react';

import { _unstable_createComponent } from '../../utils';

import type { DialogDescriptionDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles } from '~/hooks';

export const DialogDescription =
  _unstable_createComponent<DialogDescriptionDef>(
    Components.DialogDescription,
    ({ as = 'div', children, ...props }) => {
      const classes = useStyles(styles, props);
      return createElement(
        as,
        { ...props, className: classes.description.className },
        children
      );
    }
  );
