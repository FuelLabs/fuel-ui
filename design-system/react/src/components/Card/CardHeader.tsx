/* eslint-disable @typescript-eslint/no-explicit-any */
import { createElement } from 'react';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';

import type { CardHeaderDef } from './defs';
import { styles } from './styles';

const _CardHeader = _unstable_createComponent<CardHeaderDef>(
  Components.CardHeader,
  ({ as = 'header', children, space = 'normal', ...props }) => {
    const classes = useStyles(styles, props as any, ['header']);
    const elementProps = {
      ...props,
      className: classes.header.className,
      dataSpace: space,
    };
    return createElement(as, elementProps, children);
  },
);

export const CardHeader =
  createPolymorphicComponent<CardHeaderDef>(_CardHeader);
