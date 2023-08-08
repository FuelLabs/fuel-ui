import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';
import { Heading } from '../Heading';

import type * as t from './defs';
import { styles } from './styles';

const _AlertTitle = _unstable_createComponent<t.AlertTitleDef>(
  Components.AlertTitle,
  ({ as = 'header', children, ...props }) => {
    const classes = useStyles(styles, props, ['title']);
    return _unstable_createEl(
      as,
      { ...props, ...classes.title },
      <Heading as="h2">{children}</Heading>,
    );
  },
);

export const AlertTitle =
  createPolymorphicComponent<t.AlertTitleDef>(_AlertTitle);
