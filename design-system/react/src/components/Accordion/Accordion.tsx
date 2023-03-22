import { cx } from '@fuel-ui/css';
import * as AC from '@radix-ui/react-accordion';
import { createElement } from 'react';

import { createComponent } from '../../utils';

import { AccordionContent } from './AccordionContent';
import { AccordionItem } from './AccordionItem';
import { AccordionTrigger } from './AccordionTrigger';
import { rootStyles } from './styles';
import type * as t from './types';

import { useStyles, useComponentProps, useElementProps } from '~/hooks';
import { Components } from '~/types';

export const Accordion = createComponent<t.AccordionProps, t.AccordionNS>(
  ({ as = AC.Root, ...initProps }) => {
    const props = useComponentProps(Components.Accordion, initProps);
    const classes = useStyles(rootStyles, props);
    const elementProps = useElementProps(props, {
      className: cx(props.className, classes.root),
    });
    return createElement(as, elementProps);
  }
);

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;
