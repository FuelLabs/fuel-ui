import type { ThemeUtilsCSS } from "@fuel-ui/css";
import { cx, styled } from "@fuel-ui/css";
import { useButton } from "@react-aria/button";
import { useMenuItem } from "@react-aria/menu";
import { mergeProps, mergeRefs } from "@react-aria/utils";
import type { TreeState } from "@react-stately/tree";
import type { Node } from "@react-types/shared";
import type { Key, ReactNode } from "react";
import { createElement, useRef } from "react";

import type { HTMLProps } from "../../utils";
import { createComponent } from "../../utils";

import * as styles from "./styles";

export type MenuListItemProps = HTMLProps["li"] & {
  item: Node<ReactNode>;
  state: TreeState<ReactNode>;
  onAction?: (key: Key) => void;
  css?: ThemeUtilsCSS;
  className?: string;
};

const Root = styled("li");

export const MenuListItem = createComponent<MenuListItemProps>(
  ({ item, state, onAction, className, ...props }) => {
    const ref = useRef<HTMLLIElement | null>(null);
    const isDisabled = state.disabledKeys.has(item.key);
    const isFocused = state.selectionManager.focusedKey === item.key;

    const { buttonProps } = useButton(
      { isDisabled, onPress: item.props.onPress },
      ref
    );

    const { menuItemProps } = useMenuItem(
      { isDisabled, onAction, key: item.key, closeOnSelect: true },
      state,
      ref
    );

    const classes = cx("fuel_menu-list-item", className, styles.item());
    const customProps = {
      ...props,
      css: item.props.css,
      "aria-label": item.props["aria-label"],
      ref: mergeRefs(ref, props.ref!),
      className: classes,
      "data-focused": isFocused,
    };

    return createElement(
      Root,
      mergeProps(customProps, buttonProps, menuItemProps),
      item.rendered
    );
  }
);
