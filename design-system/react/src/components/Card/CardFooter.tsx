import { createElement } from 'react';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';

import type { CardFooterDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles } from '~/hooks';

// eslint-disable-next-line @typescript-eslint/naming-convention
const _CardFooter = _unstable_createComponent<CardFooterDef>(
  Components.CardFooter,
  ({ as, children, ...props }) => {
    const classes = useStyles(styles, props, ['footer']);
    const elementProps = { ...props, className: classes.footer.className };
    return createElement(as, elementProps, children);
  }
);

export const CardFooter =
  createPolymorphicComponent<CardFooterDef>(_CardFooter);
