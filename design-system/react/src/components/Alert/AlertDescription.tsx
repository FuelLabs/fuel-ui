import { cx } from "@fuel-ui/css";

import { createComponent } from "../../utils";
import type { BoxProps } from "../Box";
import { Box } from "../Box";

import * as styles from "./styles";

export const AlertDescription = createComponent<BoxProps>(
  ({ children, className, ...props }) => {
    const classes = cx(
      "fuel_alert--description",
      className,
      styles.description()
    );
    const customProps = { ...props, className: classes };
    return <Box {...customProps}>{children}</Box>;
  }
);
