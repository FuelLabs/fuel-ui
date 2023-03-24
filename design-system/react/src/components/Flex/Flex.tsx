/* eslint-disable @typescript-eslint/naming-convention */
import { createElement } from 'react';

import { createComponent2, createPolymorphicComponent } from '../../utils';

import type * as t from './types';

import { createStyle, useElementProps, useStyles } from '~/hooks';
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

    const elementProps = useElementProps(props, classes.root);
    return createElement(as, elementProps);
  }
);

export const Flex = createPolymorphicComponent<t.FlexDef>(_Flex);

const styles = createStyle(Components.Flex, {
  root: {
    display: 'flex',
  },
});
