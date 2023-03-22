import { createElement } from 'react';

import { createComponent } from '../../utils';

import { styles } from './styles';
import type { BadgeProps } from './types';

import { useComponentProps, useElementProps, useStyles } from '~/hooks';
import { Components } from '~/types';

export const Badge = createComponent<BadgeProps>(
  ({ as = 'span', ...initProps }) => {
    const props = useComponentProps(Components.Badge, initProps);
    const classes = useStyles(styles, props);
    const elementProps = useElementProps(props, {
      className: classes.root,
    });

    return createElement(as, elementProps);
  }
);
