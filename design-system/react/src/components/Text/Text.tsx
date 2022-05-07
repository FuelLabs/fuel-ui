/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Colors } from "@fuel/css";
import { css, allColors, cx, utils, styled } from "@fuel/css";
import type { ReactElement } from "react";
import { cloneElement, createElement } from "react";

import type { Icons } from "../Icon";
import { Icon } from "../Icon";

import type { HTMLProps } from "@/utils";
import { createComponent } from "@/utils";

export function createIcon(
  icon?: Icons | ReactElement,
  iconSize?: number,
  iconAriaLabel?: string
) {
  return typeof icon === "string" ? (
    <Icon icon={icon} size={iconSize} aria-label={iconAriaLabel} />
  ) : (
    icon && cloneElement(icon, { size: iconSize, "aria-label": iconAriaLabel })
  );
}

export type TextProps = HTMLProps["p"] & {
  fontSize?: utils.TextSizes;
  color?: Colors;
  leftIcon?: Icons | ReactElement;
  rightIcon?: Icons | ReactElement;
  iconSize?: number;
  iconAriaLabel?: string;
};

const Root = styled("p");

export const Text = createComponent<TextProps>(
  ({
    fontSize,
    color,
    children,
    className,
    leftIcon,
    rightIcon,
    iconSize,
    iconAriaLabel,
    ...props
  }) => {
    const classes = cx(className, styles({ fontSize, color }));
    const iconLeft = createIcon(leftIcon, iconSize, iconAriaLabel);
    const iconRight = createIcon(rightIcon, iconSize, iconAriaLabel);

    return createElement(
      Root,
      { ...props, className: classes },
      <>
        {iconLeft}
        {children}
        {iconRight}
      </>
    );
  }
);

const styles = css({
  display: "flex",
  alignItems: "center",
  gap: "$3",

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
