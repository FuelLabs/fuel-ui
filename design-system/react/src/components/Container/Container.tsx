import { css, cx } from "@fuel/css";

import type { HTMLProps } from "../../utils";
import { createComponent } from "../../utils";
import { Box } from "../Box";

export type ContainerSizes = "sm" | "md" | "lg" | "xl";
export type ContainerProps = HTMLProps["div"] & {
  size?: ContainerSizes;
};

export const Container = createComponent<ContainerProps>(
  ({ className, size, ...props }) => {
    const classes = cx("fuel_container", className, styles({ size }));
    return <Box {...props} className={classes} />;
  }
);

const styles = css({
  margin: "0 auto",

  variants: {
    size: {
      sm: {
        px: "$10",
        w: "$xl",
      },
      md: {
        px: "$14",
        w: "$2xl",
      },
      lg: {
        px: "$14",
        w: "$4xl",
      },
      xl: {
        px: "$14",
        w: "$6xl",
      },
    },
  },

  defaultVariants: {
    size: "lg",
  },
});
