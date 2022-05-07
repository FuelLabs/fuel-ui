import { ReactElement } from "react";
import { ColorKeys, cx, styled } from "@fuel/css";

import { createComponent, HTMLProps } from "@/utils";
import { createIcon } from "../Text";
import { Icons } from "../Icon";
import { Spinner } from "../Spinner";
import * as styles from "./styles";

export type ButtonVariants = "solid" | "outlined" | "ghost" | "link";
export type ButtonSizes = "xs" | "sm" | "md" | "lg";

export type ButtonBaseProps = {
  size?: ButtonSizes;
  color?: ColorKeys;
  variant?: ButtonVariants;
  leftIcon?: Icons | ReactElement;
  rightIcon?: Icons | ReactElement;
  iconSize?: number;
  iconAriaLabel?: string;
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
    iconAriaLabel,
    isLoading,
    isDisabled,
    className,
    justIcon,
    isLink,
    children,
    ...props
  }) => {
    const disabled = isLoading || isDisabled;
    const iconLeft = createIcon(leftIcon, iconSize, iconAriaLabel);
    const iconRight = createIcon(rightIcon, iconSize, iconAriaLabel);

    const classes = cx(
      className,
      styles.button({
        size,
        variant,
        disabled,
        justIcon,
        color: color as any,
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

    return (
      <Root {...buttonProps}>
        {isLoading && <Spinner color="current" size={SPINNER_SIZE[size]} />}
        {!isLoading && iconLeft}
        {isLoading ? "Loading..." : children}
        {!isLoading && iconRight}
      </Root>
    );
  }
);
