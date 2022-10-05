/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, cx } from "@fuel-ui/css";

import type { ListContext } from "..";
import { useListContext } from "..";
import { createComponent } from "../../utils";
import type { HTMLProps } from "../../utils";
import { Text } from "../Text";

type BaseProps = HTMLProps["li"];
export type ListProps = BaseProps & ListContext;

export const ListItem = createComponent<ListProps>(
  ({
    icon,
    iconSize,
    iconColor,
    iconAriaLabel,
    children,
    className,
    ...props
  }) => {
    const classes = cx("fuel_list-item", className, style());
    const ctx = useListContext();
    return (
      <Text
        as="li"
        className={classes}
        {...(props as any)}
        {...((icon || ctx.icon) && {
          iconSize: iconSize || ctx.iconSize,
          iconColor: iconColor || ctx.iconColor,
          leftIcon: icon || ctx.icon,
          leftIconAriaLabel: iconAriaLabel || ctx.iconAriaLabel,
          css: {
            display: "flex",
            ...props.css,
          },
        })}
      >
        {children}
      </Text>
    );
  }
);

const style = css({
  "&::marker": {
    color: "$gray6",
  },
});
