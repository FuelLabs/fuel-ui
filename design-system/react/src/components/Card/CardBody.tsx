/* eslint-disable @typescript-eslint/no-explicit-any */
import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import type { CardBodyDef } from './defs';
import { styles } from './styles';

const _CardBody = _unstable_createComponent<CardBodyDef>(
  Components.CardBody,
  ({ as = 'div', children, ...props }) => {
    const classes = useStyles(styles, props, ['body']);
    const elementProps = { ...props, ...classes.body };
    return _unstable_createEl(as, elementProps, children);
  },
);

export const CardBody = createPolymorphicComponent<CardBodyDef>(_CardBody);
