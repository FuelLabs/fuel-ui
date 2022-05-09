import { css, cx } from "@fuel/css";

import { Box } from "../Box";

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

export const BoxCentered = createComponent<BoxCenteredProps>(
  ({ minWS, minHS, className, ...props }) => {
    const classes = cx(className, styles({ minWS, minHS }));
    return <Box {...props} className={classes} />;
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
