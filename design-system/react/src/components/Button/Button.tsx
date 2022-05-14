import type { ColorKeys } from "@fuels-ui/css";
import { styled, css, cx } from "@fuels-ui/css";
import { useButton } from "@react-aria/button";
import type { AriaButtonProps } from "@react-types/button";
import { useMemo, createElement, useRef } from "react";
import mergeRefs from "react-merge-refs";

import { createComponent } from "../../utils";
import type { CreateComponent, HTMLProps } from "../../utils";
import type { IconProps } from "../Icon";
import { Spinner } from "../Spinner";
import { createIcon } from "../Text";

import * as styles from "./styles";

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
  leftIcon?: IconProps["icon"];
  rightIcon?: IconProps["icon"];
  leftIconAriaLabel?: string;
  rightIconAriaLabel?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
};

export type ButtonProps = Omit<HTMLProps["button"], "onClick"> &
  AriaButtonProps<"button"> &
  ButtonBaseProps & {
    justIcon?: boolean;
    isLink?: boolean;
    /**
     * @deprecated Use onPress instead. onPress support Enter and Space keyboard.
     */
    onClick?: HTMLProps["button"]["onClick"];
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
    as = "button",
    css: customCSS,
    size = "md",
    color = "accent",
    variant = "solid",
    leftIcon,
    rightIcon,
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
    const iconLeft = createIcon(leftIcon, leftIconAriaLabel);
    const iconRight = createIcon(rightIcon, rightIconAriaLabel);
    const customCSSStr = JSON.stringify(customCSS);
    const customStyle = useMemo(() => css(customCSS || {})(), [customCSSStr]);
    const classes = cx([
      "fuel_button",
      ...(customCSS ? [customStyle] : []),
      className,
      styles.button({
        size,
        variant,
        disabled,
        justIcon,
        color,
        isLink,
      }),
    ]);

    const ref = useRef<HTMLButtonElement | null>(null);
    const { buttonProps, isPressed } = useButton(
      { ...props, isDisabled, ...(isLink && { elementType: "a" }) },
      ref
    );

    const customProps = {
      ...buttonProps,
      as,
      disabled,
      ref: mergeRefs([props.ref!, ref]),
      className: classes,
      "aria-disabled": disabled,
      "aria-pressed": isPressed,
    };

    return createElement(
      Root,
      customProps,
      getChildren({
        size,
        isLoading,
        children,
        iconLeft,
        iconRight,
      })
    );
  }
) as CreateComponent<ButtonProps> & {
  id: string;
};

Button.id = "Button";
