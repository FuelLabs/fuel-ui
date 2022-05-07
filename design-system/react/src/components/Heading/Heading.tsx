/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Colors } from "@fuel/css";
import { css, allColors, cx, utils, styled } from "@fuel/css";
import { createElement } from "react";

import type { HTMLProps } from "@/utils";
import { createComponent } from "@/utils";

export type HeadingProps = HTMLProps["h1"] & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontSize?: utils.TextSizes;
  fontColor?: Colors;
};

const Root = styled("h2");

export const Heading = createComponent<HeadingProps>(
  ({ fontSize, fontColor, className, children, ...props }) => {
    const classes = cx(className, styles({ fontSize, fontColor }));
    return createElement(Root, { ...props, className: classes }, children);
  }
);

const styles = css({
  mt: "0.5rem",
  mb: "1.25rem",

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
  },

  defaultVariants: {
    fontSize: "md",
    fontColor: "fontColor",
  },
});
