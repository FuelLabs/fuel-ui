/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Colors } from "@fuel-ui/css";
import { css, allColors, cx, utils } from "@fuel-ui/css";

import type { HTMLProps } from "../../utils";
import { createComponent } from "../../utils";
import { Box } from "../Box";
import { createIcon } from "../Button";
import type { IconProps } from "../Icon";

export type HeadingProps = HTMLProps["h1"] & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontSize?: utils.TextSizes;
  fontColor?: Colors;
  iconSize?: number;
  leftIcon?: IconProps["icon"];
  rightIcon?: IconProps["icon"];
  leftIconAriaLabel?: string;
  rightIconAriaLabel?: string;
};

function getIconSize(as: HeadingProps["as"], iconSize?: number) {
  if (iconSize) return iconSize;
  if (as === "h1" || as === "h2") return 22;
  if (as === "h5" || as === "h6") return 16;
  return 18;
}

export const Heading = createComponent<HeadingProps>(
  ({
    as = "h2",
    fontSize,
    fontColor,
    className,
    iconSize: initialIconSize,
    leftIcon,
    rightIcon,
    leftIconAriaLabel,
    rightIconAriaLabel,
    children,
    ...props
  }) => {
    const iconSize = getIconSize(as, initialIconSize);
    const iconLeft = createIcon(leftIcon, leftIconAriaLabel, iconSize);
    const iconRight = createIcon(rightIcon, rightIconAriaLabel, iconSize);
    const withIcon = Boolean(leftIcon || rightIcon);
    const classes = cx(
      "fuel_heading",
      className,
      styles({ fontSize, fontColor, as, withIcon })
    );
    return (
      <Box {...props} as={as} className={classes} role="heading">
        {iconLeft} {children} {iconRight}
      </Box>
    );
  }
);

const styles = css({
  mt: "0.5rem",
  mb: "1.25rem",
  letterSpacing: "-0.02em",
  color: "$gray12",
  fontFamily: "$heading",
  fontWeight: "$semibold",

  "& .fuel_icon": {
    color: "$gray8",
  },

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
        textSize: "4xl",
      },
      h2: {
        textSize: "3xl",
      },
      h3: {
        textSize: "2xl",
      },
      h4: {
        textSize: "xl",
      },
      h5: {
        textSize: "lg",
      },
      h6: {
        textSize: "base",
      },
    },
    withIcon: {
      true: {
        display: "inline-flex",
        gap: "$2",
      },
    },
  },

  defaultVariants: {
    fontSize: "md",
    fontColor: "fontColor",
  },
});
