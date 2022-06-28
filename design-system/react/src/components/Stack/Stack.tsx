import { cx } from "@test-changesets/css";

import { createComponent } from "../../utils";
import type { FlexProps } from "../Flex";
import { Flex } from "../Flex";

export type StackProps = FlexProps;

export const Stack = createComponent<StackProps>(
  ({ gap = "$2", direction = "column", className, ...props }) => {
    const classes = cx("fuel_box--stack", className);
    return (
      <Flex {...props} gap={gap} direction={direction} className={classes} />
    );
  }
);
