import type * as AC from '@radix-ui/react-accordion';
import type { CreateComponent } from '~/utils';
import type { Components } from '~/utils/components-list';

import type { AccordionContent } from './AccordionContent';
import type { AccordionItem } from './AccordionItem';
import type { AccordionTrigger } from './AccordionTrigger';

export type AccordionBaseProps =
  | AC.AccordionSingleProps
  | AC.AccordionMultipleProps;

export type AccordionProps = Omit<AccordionBaseProps, 'value'> & {
  value?: string;
};

export type AccordionNS = {
  Item: typeof AccordionItem;
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
};

export type AccordionContentProps = AC.AccordionContentProps;
export type AccordionItemProps = AC.AccordionItemProps;
export type AccordionTriggerProps = AC.AccordionTriggerProps;

export type AccordionDef = CreateComponent<{
  type: 'div';
  component: Components.Accordion;
  element: HTMLDivElement;
  props: AccordionProps;
  styles: 'root' | 'content' | 'item' | 'trigger' | 'header' | 'icon';
  namespace: AccordionNS;
  omit: 'as';
}>;

export type AccordionContentDef = CreateComponent<{
  type: 'div';
  component: Components.AccordionContent;
  element: HTMLDivElement;
  props: AccordionContentProps;
  omit: 'as';
}>;

export type AccordionItemDef = CreateComponent<{
  type: 'div';
  component: Components.AccordionItem;
  element: HTMLDivElement;
  props: AccordionItemProps;
  omit: 'as';
}>;

export type AccordionTriggerDef = CreateComponent<{
  type: 'button';
  component: Components.AccordionTrigger;
  element: HTMLButtonElement;
  props: AccordionTriggerProps;
  omit: 'as';
}>;
