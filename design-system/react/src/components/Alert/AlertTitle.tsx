import { cx } from "@fuel-ui/css";

import { createComponent } from "../../utils";
import type { FlexProps } from "../Flex";
import { Flex } from "../Flex";
import { Heading } from "../Heading";

import * as styles from "./styles";

export const AlertTitle = createComponent<FlexProps>(
  ({ children, className, ...props }) => {
    const classes = cx("fuel_alert--title", className, styles.title());
    const customProps = { ...props, className: classes };
    return (
      <Flex as="header" {...customProps}>
        <Heading as="h3">{children}</Heading>
      </Flex>
    );
  }
);
