import { createElement } from 'react';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';

import { _unstable_createComponent } from '../../utils';

import type { DialogDescriptionDef } from './defs';
import { styles } from './styles';

export const DialogDescription =
  _unstable_createComponent<DialogDescriptionDef>(
    Components.DialogDescription,
    ({ as = 'div', children, ...props }) => {
      const classes = useStyles(styles, props);
      return createElement(
        as,
        { ...props, className: classes.description.className },
        children,
      );
    },
  );
