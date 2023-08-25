/* eslint-disable @typescript-eslint/no-explicit-any */
import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import type { CardHeaderDef } from './defs';
import { styles } from './styles';

const _CardHeader = _unstable_createComponent<CardHeaderDef>(
  Components.CardHeader,
  ({ as = 'header', children, space = 'normal', ...props }) => {
    const classes = useStyles(styles, props, ['header']);
    const elementProps = {
      ...props,
      ...classes.header,
      dataSpace: space,
    };
    return _unstable_createEl(as, elementProps, children);
  },
);

export const CardHeader =
  createPolymorphicComponent<CardHeaderDef>(_CardHeader);
