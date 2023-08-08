import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { createStyle, useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';

import type * as t from './defs';

export const AspectRatio = _unstable_createComponent<t.AspectRatioDef>(
  Components.AspectRatio,
  (props) => {
    const classes = useStyles(styles);
    return _unstable_createEl(AspectRatioPrimitive.Root, {
      ...props,
      ...classes.root,
    });
  },
);

const styles = createStyle(Components.AspectRatio, {
  root: {},
});
