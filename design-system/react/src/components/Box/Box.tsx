import { styled } from "@fuel/css";
import { createElement } from "react";

import type { HTMLProps } from "@/utils";
import { createComponent } from "@/utils";

export type BoxProps = HTMLProps["div"];

const Root = styled("div");
export const Box = createComponent<BoxProps>(({ children, ...props }) =>
  createElement(Root, props, children)
);

Box.defaultProps = {
  role: "region",
};
