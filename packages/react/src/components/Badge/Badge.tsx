import type { ColorKeys } from "@fuel/css";
import { cx, styled } from "@fuel/css";

import * as styles from "./styles";

import type { HTMLProps } from "@/utils";
import { createComponent } from "@/utils";

export type BadgeVariants = "solid" | "outlined" | "ghost";
export type BadgeProps = HTMLProps["span"] & {
  color?: ColorKeys;
  variant?: BadgeVariants;
};

const Root = styled("span");

export const Badge = createComponent<BadgeProps>(
  ({ color, variant, className, ...props }) => {
    const classes = cx(className, styles.badge({ variant, color }));
    return <Root {...props} className={classes} />;
  }
);
