/* eslint-disable @typescript-eslint/no-explicit-any */
import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import type { CardFooterDef } from './defs';
import { styles } from './styles';

const _CardFooter = _unstable_createComponent<CardFooterDef>(
  Components.CardFooter,
  ({ as = 'footer', children, ...props }) => {
    const classes = useStyles(styles, props, ['footer']);
    const elementProps = { ...props, ...classes.footer };
    return _unstable_createEl(as, elementProps, children);
  },
);

export const CardFooter =
  createPolymorphicComponent<CardFooterDef>(_CardFooter);
