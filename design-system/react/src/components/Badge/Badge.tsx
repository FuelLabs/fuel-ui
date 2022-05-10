import type { ColorKeys } from "@fuel/css";
import { styled, cx } from "@fuel/css";
import { createElement } from "react";

import type { HTMLProps } from "../../utils";
import { createComponent } from "../../utils";

import * as styles from "./styles";

export type BadgeVariants = "solid" | "outlined" | "ghost";
export type BadgeProps = HTMLProps["span"] & {
  color?: ColorKeys;
  variant?: BadgeVariants;
};

const Root = styled("span");

export const Badge = createComponent<BadgeProps>(
  ({ color, variant, className, children, ...props }) => {
    const classes = cx(
      "fuel_badge",
      className,
      styles.badge({ variant, color })
    );
    return createElement(Root, { ...props, className: classes }, children);
  }
);
