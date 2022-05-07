import { styled } from "@fuel/css";
import { createElement } from "react";

import type { HTMLProps } from "@/utils";
import { createComponent } from "@/utils";

export type StackProps = HTMLProps["div"] & {
  gap?: string;
  direction?: "row" | "column";
};

const Root = styled("div");

export const Stack = createComponent<StackProps>(
  ({
    gap = "$2",
    direction: flexDirection = "column",
    css,
    children,
    ...props
  }) => {
    const customCss = { display: "flex", gap, flexDirection, ...css };
    return createElement(Root, { ...props, css: customCss }, children);
  }
);
