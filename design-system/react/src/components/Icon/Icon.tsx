import type { Colors } from "@fuel-ui/css";
import { cx, styled } from "@fuel-ui/css";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import * as PhosphorIcons from "phosphor-react";
import { createElement } from "react";

import { useConstant } from "../../hooks";
import type { CreateComponent } from "../../utils";
import { createComponent } from "../../utils";
import { omit } from "../../utils/helpers";
import type { FlexProps } from "../Flex";
import { Flex } from "../Flex";

type ToOmit = "Icon" | "IconProps" | "IconWeight" | "IconContext";
export type Icons = keyof Omit<typeof PhosphorIcons, ToOmit>;
type OmitProps = "children";

export type IconProps = FlexProps &
  PhosphorIcons.IconProps & {
    icon: Icons;
    wrapperClassName?: string;
    color?: Colors;
    inline?: boolean;
    label?: string;
  };

export const Icon = createComponent<IconProps, OmitProps>(
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
    const Component = typeof icon === "string" ? PhosphorIcons[icon] : icon;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const iconElement = useConstant(() => styled(Component as any), [icon]);

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
        {...omit(["aria-label"], props)}
        className={cx("fuel_icon", wrapperClassName)}
        css={{
          display: inline ? "inline-flex" : "flex",
          color: `$${color}`,
          ...css,
        }}
        align="center"
        justify="center"
      >
        {createElement(iconElement, iconProps)}
        <VisuallyHidden.Root>{label || icon}</VisuallyHidden.Root>
      </Flex>
    );
  }
) as CreateComponent<IconProps, OmitProps> & {
  iconList: Icons[];
  id: string;
};

Icon.id = "Icon";
Icon.iconList = Object.keys(
  omit(["Icon", "IconProps", "IconWeight", "IconContext"], PhosphorIcons)
) as Icons[];
