/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Colors } from "@test-changeset/css";
import { css, allColors, cx, utils, styled } from "@test-changeset/css";
import { createElement } from "react";

import type { HTMLProps } from "../../utils";
import { createComponent } from "../../utils";
import type { IconProps } from "../Icon";
import { Icon } from "../Icon";

export function createIcon(icon?: IconProps["icon"], iconAriaLabel?: string) {
  return typeof icon === "string" ? (
    <Icon icon={icon} label={iconAriaLabel} />
  ) : (
    icon && createElement(icon, { label: iconAriaLabel })
  );
}

export type TextProps = HTMLProps["p"] & {
  fontSize?: utils.TextSizes;
  color?: Colors;
};

const Root = styled("p");

export const Text = createComponent<TextProps>(
  ({ fontSize, color, children, className, ...props }) => {
    const classes = cx("fuel_text", className, styles({ fontSize, color }));
    return createElement(Root, { ...props, className: classes }, children);
  }
);

const styles = css({
  variants: {
    // TODO: adjust typings
    fontSize: (utils.textSize.__keys as any[]).reduce(
      (obj, key) => ({ ...obj, [key]: { textSize: key } }),
      {}
    ),
    // TODO: adjust typings
    color: (allColors as any[]).reduce(
      (obj, key) => ({ ...obj, [key]: { color: `$${key}` } }),
      {}
    ),
  },

  defaultVariants: {
    fontSize: "md",
    color: "textColor",
  },
});
