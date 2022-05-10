import type { ThemeUtilsCSS } from "@fuel/css";

import { Box } from "../Box";

import type { HTMLProps } from "@/utils";
import { createComponent } from "@/utils";

export type GridItemProps = HTMLProps["div"] & {
  /**
   * Shorthand prop for `gridArea`
   * @type ThemeUtilsCSS["gridArea"];
   */
  area?: ThemeUtilsCSS["gridArea"];
  /**
   * The number of columns the grid item should `span`.
   * @type number | "auto
   */
  colSpan?: number | "auto";
  /**
   * The column number the grid item should start.
   * @type number | "auto
   */
  colStart?: number | "auto";
  /**
   * @type number | "auto
   */
  colEnd?: number | "auto";
  /**
   * @type number | "auto
   */
  rowStart?: number | "auto";
  /**
   * @type number | "auto
   */
  rowEnd?: number | "auto";
  /**
   * @type number | "auto
   */
  rowSpan?: number | "auto";
};

function spanFn(span?: number | "auto") {
  return span === "auto" ? "auto" : `span ${span}/span ${span}`;
}

export const GridItem = createComponent<GridItemProps>(
  ({
    area,
    colSpan,
    colStart,
    colEnd,
    rowEnd,
    rowSpan,
    rowStart,
    css,
    ...props
  }) => (
    <Box
      {...props}
      css={{
        gridArea: area,
        gridColumn: spanFn(colSpan),
        gridRow: spanFn(rowSpan),
        gridColumnStart: colStart,
        gridColumnEnd: colEnd,
        gridRowStart: rowStart,
        gridRowEnd: rowEnd,
        ...css,
      }}
    />
  )
);
