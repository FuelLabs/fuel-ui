import { css, cx, styled } from "@fuel/css";
import { createElement } from "react";

import type { HTMLProps } from "@/utils";
import { createComponent } from "@/utils";

export type BoxCenteredProps = HTMLProps["div"] & {
  /**
   * max-width: '100vh
   */
  minWS?: boolean;
  /**
   * max-height: '100vh
   */
  minHS?: boolean;
};

const Root = styled("div");

export const BoxCentered = createComponent<BoxCenteredProps>(
  ({ minWS, minHS, className, children, ...props }) => {
    const classes = cx(className, styles({ minWS, minHS }));
    return createElement(Root, { ...props, className: classes }, children);
  }
);

const styles = css({
  is: ["centered"],
  variants: {
    minWS: {
      true: {
        minW: "$screenW",
      },
    },
    minHS: {
      true: {
        minH: "$screenH",
      },
    },
  },
});
