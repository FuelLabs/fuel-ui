/* eslint-disable @typescript-eslint/no-explicit-any */
import { cx } from "@fuel-ui/css";
import { mergeRefs } from "@react-aria/utils";
import type { FC, Key } from "react";
import { useRef } from "react";
import type { AriaMenuOptions } from "react-aria";
import { mergeProps, useMenu } from "react-aria";
import type { TreeProps, ItemProps } from "react-stately";
import { Item, useTreeState } from "react-stately";

import type { HTMLProps } from "../../utils";
import { createComponent } from "../../utils";
import { omit } from "../../utils/helpers";
import { Box } from "../Box";

import type { MenuItemProps } from "./MenuItem";
import { MenuItem } from "./MenuItem";
import * as styles from "./styles";

export type MenuProps = HTMLProps["ul"] &
  TreeProps<any> &
  AriaMenuOptions<unknown> & {
    onAction?: (key: Key) => void;
    autoFocus?: boolean;
  };

type ObjProps = {
  Item: FC<ItemProps<MenuItemProps>>;
};

export const Menu = createComponent<MenuProps, ObjProps>(
  ({
    ref,
    autoFocus,
    className,
    onAction,
    selectionMode = "none",
    ...props
  }) => {
    const innerRef = useRef<HTMLUListElement | null>(null);
    const state = useTreeState<any>({ ...props, selectionMode });
    const { menuProps } = useMenu(props, state, innerRef);
    const classes = cx("fuel_menu", className, styles.menu());
    const customProps = {
      ...omit(["disabledKeys"], props),
      ref: mergeRefs(innerRef, ref),
      className: classes,
    };

    const children = [...state.collection].map((item, idx) => (
      <MenuItem
        {...(autoFocus && idx === 0 && { autoFocus: true })}
        className={item.props.className}
        key={item.key}
        item={item}
        state={state}
        onAction={onAction}
      />
    ));

    return (
      <Box as="ul" {...mergeProps(menuProps, customProps)}>
        {children}
      </Box>
    );
  }
);

Menu.Item = Item;
