import { createElement } from 'react';

import { createComponent2, createPolymorphicComponent } from '../../utils';

import type * as t from './types';

import { createStyle, useElementProps, useStyles } from '~/hooks';
import { Components } from '~/types';

// eslint-disable-next-line @typescript-eslint/naming-convention
const _Image = createComponent2<t.ImageDef>(
  Components.Image,
  ({ as = 'img', ...props }) => {
    const classes = useStyles(styles, props);
    const elementProps = useElementProps(props, classes.root);
    return createElement(as, elementProps);
  }
);

export const Image = createPolymorphicComponent<t.ImageDef>(_Image);
const styles = createStyle(Components.Image, {
  root: {},
});
