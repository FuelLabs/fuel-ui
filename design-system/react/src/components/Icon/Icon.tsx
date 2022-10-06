import type { Colors } from "@fuel-ui/css";
import { cx, styled } from "@fuel-ui/css";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import * as PhosphorIcons from "phosphor-react";
import type { ReactElement, ReactNode } from "react";
import { useMemo, cloneElement } from "react";

import { createComponent } from "../../utils";
import { omit } from "../../utils/helpers";
import type { FlexProps } from "../Flex";
import { Flex } from "../Flex";

type ToOmit = "Icon" | "IconProps" | "IconWeight" | "IconContext";
export type Icons = keyof Omit<typeof PhosphorIcons, ToOmit>;
type OmitProps = "children";

export type IconProps = FlexProps &
  PhosphorIcons.IconProps & {
    icon: Icons | ReactNode;
    wrapperClassName?: string;
    color?: Colors;
    inline?: boolean;
    label?: string;
  };

type ObjProps = {
  is: (icon: Icons) => Icons;
  iconList: Icons[];
  id: string;
};

export const Icon = createComponent<IconProps, ObjProps, OmitProps>(
  ({
    label: initialLabel,
    inline,
    icon,
    color,
    className,
    wrapperClassName,
    css,
    alt,
    size,
    weight,
    mirrored,
    ...props
  }) => {
    const iconElement = useMemo<ReactElement>(
      (() => {
        if (typeof icon === "string") {
          const Component = styled(PhosphorIcons[icon]);
          return <Component />;
        }
        return icon;
      }) as () => ReactElement,
      [icon]
    );

    const label = initialLabel || props["aria-label"];
    const iconProps = {
      className: cx(`fuel_icon--${icon}`, className),
      focusable: false,
      "aria-hidden": true,
      alt,
      size,
      weight,
      mirrored,
    };

    return (
      <Flex
        as="span"
        {...omit(["aria-label"], props)}
        className={cx("fuel_icon", wrapperClassName)}
        align="center"
        justify="center"
        css={{
          display: inline ? "inline-flex" : "flex",
          ...(color && { color: `$${color}` }),
          ...css,
        }}
      >
        {cloneElement(iconElement, iconProps)}
        <VisuallyHidden.Root>{label || icon}</VisuallyHidden.Root>
      </Flex>
    );
  }
);

const iconList = Object.keys(
  omit(["Icon", "IconProps", "IconWeight", "IconContext"], PhosphorIcons)
) as Icons[];

Icon.id = "Icon";
Icon.iconList = iconList;
Icon.is = (icon: Icons) => icon;
