import { createElement } from 'react';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';
import { Flex } from '../Box/Flex';

import type { CardFooterDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles } from '~/hooks';

// eslint-disable-next-line @typescript-eslint/naming-convention
const _CardFooter = _unstable_createComponent<CardFooterDef>(
  Components.CardFooter,
  ({ children, ...props }) => {
    const classes = useStyles(styles, props, ['footer']);
    const elementProps = { ...props, className: classes.footer.className };
    return createElement(Flex, elementProps, children);
  }
);

export const CardFooter =
  createPolymorphicComponent<CardFooterDef>(_CardFooter);
