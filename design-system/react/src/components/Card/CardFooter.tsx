/* eslint-disable @typescript-eslint/no-explicit-any */
import { createElement } from 'react';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';

import type { CardFooterDef } from './defs';
import { styles } from './styles';

const _CardFooter = _unstable_createComponent<CardFooterDef>(
  Components.CardFooter,
  ({ as = 'footer', children, ...props }) => {
    const classes = useStyles(styles, props as any, ['footer']);
    const elementProps = { ...props, className: classes.footer.className };
    return createElement(as, elementProps, children);
  },
);

export const CardFooter =
  createPolymorphicComponent<CardFooterDef>(_CardFooter);
