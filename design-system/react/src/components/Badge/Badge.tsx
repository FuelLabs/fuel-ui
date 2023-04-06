/* eslint-disable @typescript-eslint/naming-convention */
import { createElement } from 'react';

import { createComponent2, createPolymorphicComponent } from '../../utils';

import type * as t from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

const _Badge = createComponent2<t.BadgeDef>(
  Components.Badge,
  ({ as = 'span', ...props }) => {
    const classes = useStyles(styles, props);
    const elementProps = useElementProps(props, classes.root);
    return createElement(as, elementProps);
  }
);

export const Badge = createPolymorphicComponent<t.BadgeDef>(_Badge);
