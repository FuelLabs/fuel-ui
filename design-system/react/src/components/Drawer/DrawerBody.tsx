import { cx } from "@fuel-ui/css";

import type { BoxProps } from "..";
import { Box } from "..";

import { createComponent } from "~/utils";

type DrawerBodyProps = BoxProps;

export const DrawerBody = createComponent<DrawerBodyProps>(
  ({ className, ...props }) => {
    const classes = cx("fuel_drawer-body", className);
    return <Box {...props} className={classes} />;
  }
);
