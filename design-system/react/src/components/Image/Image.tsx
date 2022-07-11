import { cx, styled } from "@fuel-ui/css";
import { createElement } from "react";

import { createComponent } from "../../utils";
import type { HTMLProps } from "../../utils";

export type ImageProps = HTMLProps["img"];

const Root = styled("img");

export const Image = createComponent<ImageProps>(
  ({ children, className, ...props }) => {
    const classes = cx("fuel_image", className);
    return createElement(Root, { ...props, className: classes }, children);
  }
);
