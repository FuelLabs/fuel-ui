/* eslint-disable @typescript-eslint/no-explicit-any */
import * as AC from '@radix-ui/react-accordion';

import { createComponent2 } from '../../utils';

import { AccordionContent } from './AccordionContent';
import { AccordionItem } from './AccordionItem';
import { AccordionTrigger } from './AccordionTrigger';
import { styles } from './styles';
import type * as t from './types';

import { useStyles, useElementProps } from '~/hooks';
import { Components } from '~/types';

export const Accordion = createComponent2<t.AccordionDef>(
  Components.Accordion,
  (props) => {
    const classes = useStyles(styles, props);
    const elementProps = useElementProps(props, classes.root);
    return <AC.Root {...(elementProps as any)} />;
  }
);

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;
