import type { ThemeUtilsCSS } from "@fuel-ui/css";
import { cx } from "@fuel-ui/css";

import type { HTMLProps } from "../../utils";
import { createComponent } from "../../utils";
import { Box } from "../Box";

export type FlexProps = HTMLProps["div"] & {
  /**
   * Shorthand for `alignItems` style prop
   * @type SystemProps["alignItems"]
   */
  align?: ThemeUtilsCSS["alignItems"];
  /**
   * Shorthand for `flexBasis` style prop
   * @type SystemProps["flexBasis"]
   */
  basis?: ThemeUtilsCSS["flexBasis"];
  /**
   * Shorthand for `flexDirection` style prop
   * @type SystemProps["flexDirection"]
   */
  direction?: ThemeUtilsCSS["flexDirection"];
  /**
   * Shorthand for `gap` style prop
   * @type SystemProps["gap"]
   */
  gap?: ThemeUtilsCSS["gap"];
  /**
   * Shorthand for `flexGrow` style prop
   * @type SystemProps["flexGrow"]
   */
  grow?: ThemeUtilsCSS["flexGrow"];
  /**
   * Shorthand for `justifyContent` style prop
   * @type SystemProps["justifyContent"]
   */
  justify?: ThemeUtilsCSS["justifyContent"];
  /**
   * Shorthand for `flexShrink` style prop
   * @type SystemProps["flexShrink"]
   */
  shrink?: ThemeUtilsCSS["flexShrink"];
  /**
   * Shorthand for `flexWrap` style prop
   * @type SystemProps["flexWrap"]
   */
  wrap?: ThemeUtilsCSS["flexWrap"];
};

export const Flex = createComponent<FlexProps>(
  ({
    gap,
    direction = "row",
    align,
    justify,
    wrap,
    basis,
    grow,
    shrink,
    css,
    className,
    ...props
  }) => {
    const classes = cx("fuel_box--flex", className);
    return (
      <Box
        {...props}
        className={classes}
        css={{
          gap,
          flexDirection: direction,
          alignItems: align,
          justifyContent: justify,
          flexWrap: wrap,
          flexBasis: basis,
          flexGrow: grow,
          flexShrink: shrink,
          display: "flex",
          ...css,
        }}
      />
    );
  }
);
