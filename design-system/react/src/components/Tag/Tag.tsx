import { cx, styled } from "@fuel/css";
import type { ReactNode } from "react";
import { Children, createElement } from "react";

import type { ButtonBaseProps } from "../Button";
import { SPINNER_SIZE } from "../Button";
import { Spinner } from "../Spinner";
import { createIcon } from "../Text";

import { TagCloseButton } from "./TagCloseButton";
import * as styles from "./styles";

import { createComponent } from "@/utils";
import type { HTMLProps } from "@/utils";

function getChildren(
  isLoading: boolean | undefined,
  size: ButtonBaseProps["size"],
  iconLeft: ButtonBaseProps["leftIcon"],
  iconRight: ButtonBaseProps["rightIcon"],
  children: ReactNode
) {
  if (isLoading) {
    return (
      <>
        <Spinner color="current" size={SPINNER_SIZE[size || "md"]} />
        {children}
      </>
    );
  }
  const hasCloseBtn = Children.toArray(children).some((child: any) =>
    child.type?.name?.includes("TagCloseButton")
  );
  if (hasCloseBtn) {
    return children;
  }
  return (
    <>
      {iconLeft}
      {children}
      {iconRight}
    </>
  );
}

export type TagVariants = "solid" | "outlined" | "ghost";
export type TagSizes = "xs" | "sm" | "md";

export type TagProps = HTMLProps["div"] &
  ButtonBaseProps & {
    size?: TagSizes;
    variant?: TagVariants;
  };

const Root = styled("div");

const TagBase = createComponent<TagProps>(
  ({
    size = "sm",
    color = "accent",
    variant = "solid",
    leftIcon,
    rightIcon,
    iconSize,
    iconAriaLabel,
    isLoading,
    isDisabled,
    children,
    className,
    ...props
  }) => {
    const disabled = isLoading || isDisabled;
    const iconLeft = createIcon(leftIcon, iconSize, iconAriaLabel);
    const iconRight = createIcon(rightIcon, iconSize, iconAriaLabel);

    const classes = cx(
      className,
      styles.tag({
        size,
        variant,
        disabled,
        color,
      })
    );

    const customChildren = getChildren(
      isLoading,
      size,
      iconLeft,
      iconRight,
      children
    );

    return createElement(
      Root,
      { ...props, className: classes },
      customChildren
    );
  }
);

type TagComponent = typeof TagBase & {
  CloseButton: typeof TagCloseButton;
};

export const Tag = TagBase as TagComponent;
Tag.CloseButton = TagCloseButton;
