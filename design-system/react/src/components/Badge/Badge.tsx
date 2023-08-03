import { createElement } from 'react';
import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';

import type * as t from './defs';
import { styles } from './styles';

const _Badge = _unstable_createComponent<t.BadgeDef>(
  Components.Badge,
  ({ as = 'span', ...props }) => {
    const classes = useStyles(styles, props);
    const elementProps = useElementProps(props, classes.root);
    return createElement(as, elementProps);
  },
);

export const Badge = createPolymorphicComponent<t.BadgeDef>(_Badge);
