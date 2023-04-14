import * as AC from '@radix-ui/react-accordion';
import { createElement } from 'react';

import { _unstable_createComponent } from '../../utils';

import type * as t from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

export const AccordionItem = _unstable_createComponent<t.AccordionItemDef>(
  Components.AccordionItem,
  (props) => {
    const classes = useStyles(styles, {}, ['item']);
    const elementProps = useElementProps(props, classes.item);
    return createElement(AC.AccordionItem, elementProps);
  }
);
