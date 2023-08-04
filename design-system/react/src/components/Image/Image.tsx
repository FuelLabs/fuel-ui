import { Components } from '~/defs';
import { createStyle, useStyles } from '~/hooks';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import type * as t from './defs';

const _Image = _unstable_createComponent<t.ImageDef>(
  Components.Image,
  ({ as = 'img', ...props }) => {
    const classes = useStyles(styles, props);
    return _unstable_createEl(as, { ...props, ...classes.root });
  },
);

export const Image = createPolymorphicComponent<t.ImageDef>(_Image);
const styles = createStyle(Components.Image, {
  root: {},
});
