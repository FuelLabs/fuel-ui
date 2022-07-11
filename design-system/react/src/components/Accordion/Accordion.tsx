import { cx } from "@fuel-ui/css";
import * as AC from "@radix-ui/react-accordion";

import type { CreateComponent } from "../../utils";
import { createComponent } from "../../utils";

import { AccordionContent } from "./AccordionContent";
import { AccordionItem } from "./AccordionItem";
import { AccordionTrigger } from "./AccordionTrigger";
import * as styles from "./styles";

type AccordionBaseProps =
  | (AC.AccordionSingleProps & React.RefAttributes<HTMLDivElement>)
  | (AC.AccordionMultipleProps & React.RefAttributes<HTMLDivElement>);

export type AccordionProps = AccordionBaseProps & {
  className?: string;
};

export const Accordion = createComponent<AccordionProps>(
  ({ className, ...props }) => (
    <AC.Root
      {...(props as AccordionProps)}
      className={cx("fuel_accordion-root", className, styles.root())}
    />
  )
) as CreateComponent<AccordionProps> & {
  Item: typeof AccordionItem;
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
};

export type AccordionContentProps = AC.AccordionContentProps & {
  className?: string;
};

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;
