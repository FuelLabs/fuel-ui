import { createElement } from 'react';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';

import type { CardHeaderDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles } from '~/hooks';

// eslint-disable-next-line @typescript-eslint/naming-convention
const _CardHeader = _unstable_createComponent<CardHeaderDef>(
  Components.CardHeader,
  ({ as = 'header', children, space = 'normal', ...props }) => {
    const classes = useStyles(styles, props, ['header']);
    const elementProps = {
      ...props,
      className: classes.header.className,
      dataSpace: space,
    };
    return createElement(as, elementProps, children);
  }
);

export const CardHeader =
  createPolymorphicComponent<CardHeaderDef>(_CardHeader);
