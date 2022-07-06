import { cx } from "@fuel-ui/css";
import { Children } from "react";

import { createComponent } from "../../utils";
import type { HTMLProps, CreateComponent } from "../../utils";
import { Box } from "../Box";
import type { ButtonBaseProps } from "../Button";
import { SPINNER_SIZE } from "../Button";
import { Spinner } from "../Spinner";
import { createIcon } from "../Text";

import { TagCloseButton } from "./TagCloseButton";
import * as styles from "./styles";

type GetChildrenParams = TagProps & {
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
};
function getChildren({
  isLoading,
  size,
  children,
  iconLeft,
  iconRight,
}: GetChildrenParams) {
  if (isLoading) {
    return (
      <>
        <Spinner color="current" size={SPINNER_SIZE[size || "md"]} />
        {children}
      </>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hasCloseBtn = Children.toArray(children).some((child: any) =>
    child.type?.id?.includes("TagCloseButton")
  );
  return (
    <>
      {iconLeft}
      {children}
      {!hasCloseBtn && iconRight}
    </>
  );
}

export type TagVariants = "solid" | "outlined" | "ghost";
export type TagSizes = "xs" | "sm" | "md";

export type TagProps = HTMLProps["div"] &
  Omit<ButtonBaseProps, "iconAriaLabel"> & {
    size?: TagSizes;
    variant?: TagVariants;
  };

export const Tag = createComponent<TagProps>(
  ({
    as = "span",
    size = "sm",
    color = "accent",
    variant = "solid",
    leftIcon,
    rightIcon,
    leftIconAriaLabel,
    rightIconAriaLabel,
    isLoading,
    isDisabled,
    children,
    className,
    ...props
  }) => {
    const disabled = isLoading || isDisabled;
    const iconLeft = createIcon(leftIcon, leftIconAriaLabel);
    const iconRight = createIcon(rightIcon, rightIconAriaLabel);

    const classes = cx(
      "fuel_tag",
      className,
      styles.tag({
        size,
        variant,
        disabled,
        color,
      })
    );

    const customChildren = getChildren({
      isLoading,
      size,
      iconLeft,
      iconRight,
      children,
    });

    return (
      <Box as={as} {...props} className={classes}>
        {customChildren}
      </Box>
    );
  }
) as CreateComponent<TagProps> & {
  CloseButton: typeof TagCloseButton;
};

Tag.CloseButton = TagCloseButton;
