import type { Colors } from "@test-changeset/css";
import { cx, styled } from "@test-changeset/css";
import * as RadixIcons from "@radix-ui/react-icons";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { createElement } from "react";

import { useConstant } from "../../hooks";
import type { CreateComponent } from "../../utils";
import { createComponent } from "../../utils";
import { omit } from "../../utils/helpers";
import type { FlexProps } from "../Flex";
import { Flex } from "../Flex";

export type Icons = keyof typeof RadixIcons;
type OmitProps = "children";

export type IconProps = FlexProps & {
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
    ...props
  }) => {
    const iconElement = useConstant(
      () => styled(typeof icon === "string" ? RadixIcons[icon] : icon),
      [icon]
    );

    const label = initialLabel || props["aria-label"];
    const iconProps = {
      className: cx(`fuel_icon--${icon}`, className),
      focusable: false,
      "aria-hidden": true,
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

Icon.iconList = Object.keys(RadixIcons) as Icons[];
Icon.id = "Icon";
