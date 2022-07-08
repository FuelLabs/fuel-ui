import { cx, styled } from "@fuel-ui/css";
import * as AC from "@radix-ui/react-accordion";
import { createElement } from "react";

import { createComponent } from "../../utils";
import { Box } from "../Box";

import * as styles from "./styles";

export type AccordionContentProps = AC.AccordionContentProps & {
  className?: string;
};

const Root = styled(AC.AccordionContent);

export const AccordionContent = createComponent<AccordionContentProps>(
  ({ className, children, ...props }) => {
    const classes = cx("fuel_accordion-content", className, styles.content());
    return createElement(
      Root,
      { ...props, className: classes },
      <Box css={{ p: "$4" }}>{children}</Box>
    );
  }
);
