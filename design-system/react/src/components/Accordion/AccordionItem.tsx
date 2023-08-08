import * as AC from '@radix-ui/react-accordion';
import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';

import type * as t from './defs';
import { styles } from './styles';

export const AccordionItem = _unstable_createComponent<t.AccordionItemDef>(
  Components.AccordionItem,
  (props) => {
    const classes = useStyles(styles, props, ['item']);
    return _unstable_createEl(AC.AccordionItem, {
      ...props,
      ...classes.item,
    });
  },
);
