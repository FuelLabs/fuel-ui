import * as AC from '@radix-ui/react-accordion';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';

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
