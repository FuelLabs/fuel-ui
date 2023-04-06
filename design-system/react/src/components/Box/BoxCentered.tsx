/* eslint-disable @typescript-eslint/naming-convention */
import { createElement } from 'react';

import { createComponent2, createPolymorphicComponent } from '../../utils';

import type * as t from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

const _BoxCentered = createComponent2<t.BoxCenteredDef>(
  Components.BoxCentered,
  ({ as = 'div', css, minHS, minWS, ...props }) => {
    const { direction, align, justify, wrap, basis, grow, shrink, gap } = props;
    const classes = useStyles(
      styles,
      {
        ...props,
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
      },
      ['centered']
    );
    const elementProps = useElementProps(props, classes.centered, {
      ...(minHS ? { 'data-min-hs': minHS } : {}),
      ...(minWS ? { 'data-min-ws': minWS } : {}),
    });
    return createElement(as, elementProps);
  }
);

export const BoxCentered =
  createPolymorphicComponent<t.BoxCenteredDef>(_BoxCentered);
