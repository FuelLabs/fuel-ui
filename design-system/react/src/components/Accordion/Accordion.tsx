/* eslint-disable @typescript-eslint/no-explicit-any */
import { cx } from '@fuel-ui/css';
import * as AC from '@radix-ui/react-accordion';

import { createComponent } from '../../utils';

import { AccordionContent } from './AccordionContent';
import { AccordionItem } from './AccordionItem';
import { AccordionTrigger } from './AccordionTrigger';
import * as styles from './styles';

type AccordionBaseProps = AC.AccordionSingleProps | AC.AccordionMultipleProps;

export type AccordionProps = Omit<AccordionBaseProps, 'value'> & {
  value?: string;
  className?: string;
};

type ObjProps = {
  Item: typeof AccordionItem;
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
};

export const Accordion = createComponent<AccordionProps, ObjProps>(
  ({ className, ...props }) => (
    <AC.Root
      /**
       * This is need because types from Radix Accordion are very weird
       * TODO: Need to dig deep into this to resolve
       */
      {...(props as any)}
      className={cx('fuel_AccordionRoot', className, styles.root())}
    />
  )
);

export type AccordionContentProps = AC.AccordionContentProps & {
  className?: string;
};

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;
