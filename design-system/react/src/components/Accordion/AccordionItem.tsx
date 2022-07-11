import { cx, styled } from "@fuel-ui/css";
import * as AC from "@radix-ui/react-accordion";
import { createElement } from "react";

import { createComponent } from "../../utils";

import * as styles from "./styles";

export type AccordionItemProps = AC.AccordionItemProps & {
  className?: string;
};

const Root = styled(AC.AccordionItem);

export const AccordionItem = createComponent<AccordionItemProps>(
  ({ className, children, ...props }) => {
    const classes = cx("fuel_accordion-item", className, styles.item());
    return createElement(Root, { ...props, className: classes }, children);
  }
);
