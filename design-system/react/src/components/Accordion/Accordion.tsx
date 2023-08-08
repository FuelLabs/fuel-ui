/* eslint-disable @typescript-eslint/no-explicit-any */
import * as AC from '@radix-ui/react-accordion';
import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';

import { AccordionContent } from './AccordionContent';
import { AccordionItem } from './AccordionItem';
import { AccordionTrigger } from './AccordionTrigger';
import type * as t from './defs';
import { styles } from './styles';

export const Accordion = _unstable_createComponent<t.AccordionDef>(
  Components.Accordion,
  (props) => {
    const classes = useStyles(styles, props);
    return _unstable_createEl(AC.Root, {
      ...props,
      ...classes.root,
    });
  },
);

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;
