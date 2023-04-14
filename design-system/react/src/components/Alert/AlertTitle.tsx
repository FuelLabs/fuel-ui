/* eslint-disable @typescript-eslint/naming-convention */
import { createElement } from 'react';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';
import { Heading } from '../Heading';

import type * as t from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles, useElementProps } from '~/hooks';

const _AlertTitle = _unstable_createComponent<t.AlertTitleDef>(
  Components.AlertTitle,
  ({ as = 'header', children, ...props }) => {
    const classes = useStyles(styles);
    const elementProps = useElementProps(props, classes.title);
    return createElement(
      as,
      elementProps,
      <Heading as="h2">{children}</Heading>
    );
  }
);

export const AlertTitle =
  createPolymorphicComponent<t.AlertTitleDef>(_AlertTitle);
