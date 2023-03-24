import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { createElement } from 'react';

import { createComponent2 } from '../../utils';

import type * as t from './types';

import { createStyle, useElementProps, useStyles } from '~/hooks';
import { Components } from '~/types';

export const AspectRatio = createComponent2<t.AspectRatioDef>(
  Components.AspectRatio,
  (props) => {
    const classes = useStyles(styles);
    const elementProps = useElementProps(props, classes.root);
    return createElement(AspectRatioPrimitive.Root, elementProps);
  }
);

const styles = createStyle(Components.AspectRatio, {
  root: {},
});
