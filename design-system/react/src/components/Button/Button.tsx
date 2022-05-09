import type { ColorKeys } from "@fuel/css";
import { cx } from "@fuel/css";
import { styled } from "@stitches/react";
import type { ElementType } from "react";
import { createElement } from "react";

import type { Icons } from "../Icon";
import { Spinner } from "../Spinner";
import { createIcon } from "../Text";

import * as styles from "./styles";

import { createComponent } from "@/utils";
import type { HTMLProps } from "@/utils";

type GetChildrenParams = ButtonProps & {
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
};
function getChildren({
  isLoading,
  size = "md",
  children,
  iconLeft,
  iconRight,
}: GetChildrenParams) {
  if (isLoading) {
    return (
      <>
        <Spinner color="current" size={SPINNER_SIZE[size]} /> Loading...
      </>
    );
  }
  return (
    <>
      {iconLeft} {children} {iconRight}
    </>
  );
}

export type ButtonVariants = "solid" | "outlined" | "ghost" | "link";
export type ButtonSizes = "xs" | "sm" | "md" | "lg";

export type ButtonBaseProps = {
  size?: ButtonSizes;
  color?: ColorKeys;
  variant?: ButtonVariants;
  leftIcon?: Icons | ElementType;
  rightIcon?: Icons | ElementType;
  iconSize?: number;
  leftIconAriaLabel?: string;
  rightIconAriaLabel?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
};

export type ButtonProps = HTMLProps["button"] &
  ButtonBaseProps & {
    justIcon?: boolean;
    isLink?: boolean;
  };

export const SPINNER_SIZE = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
};

const Root = styled("button");

export const Button = createComponent<ButtonProps>(
  ({
    role = "button",
    type = "button",
    size = "md",
    color = "accent",
    variant = "solid",
    leftIcon,
    rightIcon,
    iconSize,
    leftIconAriaLabel,
    rightIconAriaLabel,
    isLoading,
    isDisabled,
    className,
    justIcon,
    isLink,
    children,
    ...props
  }) => {
    const disabled = isLoading || isDisabled;
    const iconLeft = createIcon(leftIcon, iconSize, leftIconAriaLabel);
    const iconRight = createIcon(rightIcon, iconSize, rightIconAriaLabel);

    const classes = cx(
      className,
      styles.button({
        size,
        variant,
        disabled,
        justIcon,
        color,
        isLink,
      })
    );

    /**
     * Modify handlers to don't execute if disabled is true
     */
    const handleProps = Object.entries(props)
      .filter(([key]) => key.startsWith("on"))
      .reduce(
        (obj, [key, val]) => ({ ...obj, [key]: disabled ? () => null : val }),
        {}
      );

    const buttonProps = {
      ...props,
      ...handleProps,
      ...(isLink ? { role: "link" } : { role }),
      ...(!isLink && { type }),
      disabled,
      "aria-disabled": disabled,
      className: classes,
    };

    const customChildren = getChildren({
      size,
      isLoading,
      children,
      iconLeft,
      iconRight,
    });
    return createElement(Root, buttonProps, customChildren);
  }
);
