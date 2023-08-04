import { Components } from '~/defs';
import { useStyles } from '~/hooks';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import { useDialog } from './Dialog';
import type { DialogHeadingDef } from './defs';
import { styles } from './styles';

const _DialogHeading = _unstable_createComponent<DialogHeadingDef>(
  Components.DialogHeading,
  ({ as = 'h2', ...props }) => {
    const { headingProps } = useDialog();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const classes = useStyles(styles, props as any, ['heading']);
    const nextProps = {
      ...props,
      ...headingProps,
      ...classes.heading,
    };

    return _unstable_createEl(as, nextProps);
  },
);

export const DialogHeading =
  createPolymorphicComponent<DialogHeadingDef>(_DialogHeading);
