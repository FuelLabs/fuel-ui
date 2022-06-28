import { cx, styled } from "@test-changeset/css";
import { createElement } from "react";

import type { HTMLProps } from "../../utils";
import { createComponent } from "../../utils";

export type BoxProps = HTMLProps["div"];

const Root = styled("div");

export const Box = createComponent<BoxProps>(
  ({ className, children, ...props }) => {
    const classes = cx("fuel_box", className);
    return createElement(Root, { ...props, className: classes }, children);
  }
);
