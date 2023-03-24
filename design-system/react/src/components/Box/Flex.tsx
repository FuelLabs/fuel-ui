/* eslint-disable @typescript-eslint/naming-convention */
import { createElement } from 'react';

import { createComponent2, createPolymorphicComponent } from '../../utils';

import { styles } from './styles';
import type * as t from './types';

import { useElementProps, useStyles } from '~/hooks';
import { Components } from '~/types';

const _Flex = createComponent2<t.FlexDef>(
  Components.Flex,
  ({ as = 'div', css, ...props }) => {
    const { direction, align, justify, wrap, basis, grow, shrink, gap } = props;
    const classes = useStyles(styles, {
      css: {
        gap,
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        flexBasis: basis,
        flexGrow: grow,
        flexShrink: shrink,
        display: 'flex',
        ...css,
      },
    });
    const elementProps = useElementProps(props, classes.flex);
    return createElement(as, elementProps);
  }
);

export const Flex = createPolymorphicComponent<t.FlexDef>(_Flex);
