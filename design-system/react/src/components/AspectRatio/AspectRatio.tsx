import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { createElement } from 'react';
import { Components } from '~/defs';
import { createStyle, useElementProps, useStyles } from '~/hooks';

import { _unstable_createComponent } from '../../utils';

import type * as t from './defs';

export const AspectRatio = _unstable_createComponent<t.AspectRatioDef>(
  Components.AspectRatio,
  (props) => {
    const classes = useStyles(styles);
    const elementProps = useElementProps(props, classes.root);
    return createElement(AspectRatioPrimitive.Root, elementProps);
  },
);

const styles = createStyle(Components.AspectRatio, {
  root: {},
});
