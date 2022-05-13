import { cx, styled } from "@fuels-ui/css";
import { createElement } from "react";

import type { HTMLProps } from "../../utils";
import { createComponent } from "../../utils";
import * as styles from "../Dialog/styles";

export type AlertDialogFooterProps = HTMLProps["footer"] & {
  align?: "start" | "end";
};

const Root = styled("footer");

export const AlertDialogFooter = createComponent<AlertDialogFooterProps>(
  ({ align, className, children, ...props }) => {
    const classes = cx(
      "fuel_alert-dialog--footer",
      className,
      styles.footer({ align })
    );
    return createElement(Root, { ...props, className: classes }, children);
  }
);
