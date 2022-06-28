import { cx, styled } from "@test-changesets/css";
import { createElement } from "react";

import type { HTMLProps } from "../../utils";
import { createComponent } from "../../utils";

import * as styles from "./styles";

export type DialogFooterProps = HTMLProps["footer"] & {
  align?: "start" | "end";
};

const Root = styled("footer");

export const DialogFooter = createComponent<DialogFooterProps>(
  ({ align, className, children, ...props }) => {
    const classes = cx(
      "fuel_dialog--footer",
      className,
      styles.footer({ align })
    );
    return createElement(Root, { ...props, className: classes }, children);
  }
);
