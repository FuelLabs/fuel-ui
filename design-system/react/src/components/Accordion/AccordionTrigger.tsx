import { cx, styled } from "@fuel-ui/css";
import * as AC from "@radix-ui/react-accordion";
import { createElement } from "react";

import { createComponent } from "../../utils";
import { Icon } from "../Icon";

import * as styles from "./styles";

export type AccordionTriggerProps = AC.AccordionTriggerProps & {
  className?: string;
};

const Root = styled(AC.AccordionHeader);

export const AccordionTrigger = createComponent<AccordionTriggerProps>(
  ({ className, children, ...props }) => {
    const classes = cx("fuel_accordion-header", className, styles.header());
    const iconClass = cx("fuel_accordion-icon", styles.chevron());
    const triggerClass = cx(
      "fuel_accordion-trigger",
      className,
      styles.trigger()
    );

    return createElement(
      Root,
      { className: classes },
      <AC.AccordionTrigger {...props} className={triggerClass}>
        {children}
        <Icon icon="CaretDown" aria-hidden className={iconClass} />
      </AC.AccordionTrigger>
    );
  }
);
