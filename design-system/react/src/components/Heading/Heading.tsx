/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Colors } from "@fuels-ui/css";
import { css, allColors, cx, utils } from "@fuels-ui/css";

import type { HTMLProps } from "../../utils";
import { createComponent } from "../../utils";
import { Box } from "../Box";

export type HeadingProps = HTMLProps["h1"] & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontSize?: utils.TextSizes;
  fontColor?: Colors;
};

export const Heading = createComponent<HeadingProps>(
  ({ as = "h2", fontSize, fontColor, className, ...props }) => {
    const classes = cx(
      "fuel_heading",
      className,
      styles({ fontSize, fontColor, as })
    );
    return <Box {...props} as={as} className={classes} role="heading" />;
  }
);

const styles = css({
  mt: "0.5rem",
  mb: "1.25rem",
  letterSpacing: "-.05em",

  variants: {
    // FIX: adjust type type
    fontSize: (utils.textSize.__keys as any[]).reduce(
      (obj, key) => ({ ...obj, [key]: { textSize: key } }),
      {}
    ),
    // FIX: adjust type type
    fontColor: (allColors as any[]).reduce(
      (obj, key) => ({ ...obj, [key]: { color: `$${key}` } }),
      {}
    ),
    as: {
      h1: {
        textSize: "5xl",
      },
      h2: {
        textSize: "4xl",
      },
      h3: {
        textSize: "3xl",
      },
      h4: {
        textSize: "2xl",
      },
      h5: {
        textSize: "xl",
      },
      h6: {
        textSize: "lg",
      },
    },
  },

  defaultVariants: {
    fontSize: "md",
    fontColor: "fontColor",
  },
});
