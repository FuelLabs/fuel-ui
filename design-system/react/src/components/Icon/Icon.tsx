import type { Colors } from "@fuel/css";
import { styled } from "@fuel/css";
import type { ElementType } from "react";
import { useMemo, createElement } from "react";
import type { IconType } from "react-icons";
import * as IconSet from "react-icons/bi";

import { createComponent } from "../../utils";

export type Icons = keyof typeof IconSet;
type OmitProps = "as" | "children";

export type IconProps = {
  icon: Icons | ElementType;
  size?: number;
  className?: string;
  color?: Colors;
  ["aria-label"]?: string;
};

const IconBase = createComponent<IconProps, OmitProps>(
  ({ icon, size, color, ...props }) => {
    const element = useMemo(
      () => styled(typeof icon === "string" ? IconSet[icon] : icon),
      [icon]
    );
    const ariaLabel = props["aria-label"];
    const iconProps = {
      ...props,
      css: { color: `$${color}` },
      ...(ariaLabel && { "aria-label": ariaLabel }),
      ...(size && { size }),
    };

    return createElement(element, iconProps);
  }
);

export type IconComponent = typeof IconBase & {
  [K in Icons]: IconType | ElementType;
} & {
  _iconList: Icons[];
};

export const Icon = IconBase as IconComponent;
Icon._iconList = Object.keys(IconSet) as Icons[];
