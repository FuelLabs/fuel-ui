/* eslint-disable @typescript-eslint/naming-convention */
import { createElement } from 'react';

import type { HTMLProps } from '../../utils';
import { createPolymorphicComponent, createComponent2 } from '../../utils';

import type * as t from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

export type ContainerSizes = 'sm' | 'md' | 'lg' | 'xl';
export type ContainerProps = HTMLProps['div'] & {
  size?: ContainerSizes;
};

const _Container = createComponent2<t.ContainerDef>(
  Components.Container,
  ({ as = 'div', ...props }) => {
    const classes = useStyles(styles, props, ['container']);
    const elementProps = useElementProps(props, classes.container);
    return createElement(as, elementProps);
  }
);

export const Container = createPolymorphicComponent<t.ContainerDef>(_Container);
