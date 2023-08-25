import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';

import type * as t from './defs';
import { styles } from './styles';

export const BreadcrumbItem = _unstable_createComponent<t.BreadcrumbItemDef>(
  Components.BreadcrumbItem,
  (props) => {
    const classes = useStyles(styles, props, ['item']);
    return _unstable_createEl('li', { ...props, ...classes.item });
  },
);

BreadcrumbItem.id = 'BreadcrumbItem';
