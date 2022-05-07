import { cx, styled } from "@fuel/css";
import { createElement } from "react";

import * as styles from "./styles";

import type { HTMLProps } from "@/utils";
import { createComponent } from "@/utils";

export type DialogFooterProps = HTMLProps["footer"] & {
  align?: "start" | "end";
};

const Root = styled("footer");

export const DialogFooter = createComponent<DialogFooterProps>(
  ({ align, className, children, ...props }) => {
    const classes = cx(className, styles.footer({ align }));
    return createElement(Root, { ...props, className: classes }, children);
  }
);
