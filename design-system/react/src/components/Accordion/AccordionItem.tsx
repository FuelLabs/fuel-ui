import { cx } from '@fuel-ui/css';
import * as AC from '@radix-ui/react-accordion';
import { createElement } from 'react';

import { createComponent } from '../../utils';

import * as styles from './styles';
import type * as t from './types';

import { useComponentProps, useStyles } from '~/hooks';
import { Components } from '~/types';

export const AccordionItem = createComponent<t.AccordionItemProps>(
  (initProps) => {
    const props = useComponentProps(Components.AccordionItem, initProps);
    const classes = useStyles(styles.itemStyles, props);
    return createElement(AC.AccordionItem, {
      ...props,
      className: cx(props.className, classes.item),
    });
  }
);
