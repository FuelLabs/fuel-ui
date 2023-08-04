import { createElement } from 'react';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';

import type { DialogDescriptionDef, DialogFooterDef } from './defs';
import { styles } from './styles';

const _DialogFooter = _unstable_createComponent<DialogFooterDef>(
  Components.DialogFooter,
  ({ as = 'footer', children, ...props }) => {
    const classes = useStyles(styles, props, ['footer']);
    return createElement(
      as,
      { ...props, className: classes.footer.className },
      children,
    );
  },
);

export const DialogFooter =
  createPolymorphicComponent<DialogDescriptionDef>(_DialogFooter);
