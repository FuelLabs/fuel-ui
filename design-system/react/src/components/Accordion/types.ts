import type * as AC from '@radix-ui/react-accordion';

import type { AccordionContent } from './AccordionContent';
import type { AccordionItem } from './AccordionItem';
import type { AccordionTrigger } from './AccordionTrigger';

export type AccordionBaseProps =
  | AC.AccordionSingleProps
  | AC.AccordionMultipleProps;

export type AccordionProps = Omit<AccordionBaseProps, 'value'> & {
  value?: string;
  className?: string;
};

export type AccordionNS = {
  Item: typeof AccordionItem;
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
};

export type AccordionContentProps = AC.AccordionContentProps & {
  className?: string;
};

export type AccordionItemProps = AC.AccordionItemProps & {
  className?: string;
};

export type AccordionTriggerProps = AC.AccordionTriggerProps & {
  className?: string;
};

export type AccordionDef = {
  props: AccordionProps;
  styles: 'root';
};

export type AccordionContentDef = {
  props: AccordionContentProps;
  styles: 'content';
};

export type AccordionItemDef = {
  props: AccordionItemProps;
  styles: 'item';
};

export type AccordionTriggerDef = {
  props: AccordionTriggerProps;
  styles: 'trigger' | 'header' | 'icon';
};
