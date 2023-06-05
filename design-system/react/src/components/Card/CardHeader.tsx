import { createElement } from 'react';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';
import { Flex } from '../Box/Flex';

import type { CardHeaderDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles } from '~/hooks';

// eslint-disable-next-line @typescript-eslint/naming-convention
const _CardHeader = _unstable_createComponent<CardHeaderDef>(
  Components.CardHeader,
  ({ children, space = 'normal', ...props }) => {
    const classes = useStyles(styles, props);
    const elementProps = {
      ...props,
      className: classes.header.className,
      as: 'header',
      dataSpace: space,
    };
    return createElement(Flex, elementProps, children);
  }
);

export const CardHeader =
  createPolymorphicComponent<CardHeaderDef>(_CardHeader);
