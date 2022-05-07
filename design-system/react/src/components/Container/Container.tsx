import { css, cx, styled } from "@fuel/css";
import { createElement } from "react";

import type { HTMLProps } from "@/utils";
import { createComponent } from "@/utils";

export type ContainerSizes = "sm" | "md" | "lg" | "xl";
export type ContainerProps = HTMLProps["div"] & {
  size?: ContainerSizes;
};

const Root = styled("div");

export const Container = createComponent<ContainerProps>(
  ({ className, size, children, ...props }) => {
    const classes = cx(className, styles({ size }));
    return createElement(Root, { ...props, className: classes }, children);
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
