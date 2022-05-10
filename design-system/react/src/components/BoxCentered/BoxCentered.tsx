import { css, cx } from "@fuel/css";

import { createComponent } from "../../utils";
import type { FlexProps } from "../Flex";
import { Flex } from "../Flex";

export type BoxCenteredProps = FlexProps & {
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
    const classes = cx(
      "fuel_box-centered",
      className,
      styles({ minWS, minHS })
    );
    return <Flex {...props} className={classes} />;
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
