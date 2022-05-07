import { cloneElement, ReactElement } from "react";
import { css, allColors, Colors, cx, utils, styled } from "@fuel/css";

import { createComponent, HTMLProps } from "@/utils";
import { Icon, Icons } from "../Icon";

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

    return (
      <Root {...props} className={classes}>
        {iconLeft}
        {children}
        {iconRight}
      </Root>
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
