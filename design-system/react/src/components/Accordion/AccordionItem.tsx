import * as AC from '@radix-ui/react-accordion';
import { createElement } from 'react';
import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

import { _unstable_createComponent } from '../../utils';

import type * as t from './defs';
import { styles } from './styles';

export const AccordionItem = _unstable_createComponent<t.AccordionItemDef>(
  Components.AccordionItem,
  (props) => {
    const classes = useStyles(styles, props, ['item']);
    const elementProps = useElementProps(props, classes.item);
    return createElement(AC.AccordionItem, elementProps);
  },
);
