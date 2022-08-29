import type { ThemeUtilsCSS } from "@fuel-ui/css";
import { cx, styled } from "@fuel-ui/css";
import { mergeRefs } from "@react-aria/utils";
import type { Node } from "@react-types/shared";
import type { Key, ReactNode } from "react";
import { createElement, useRef } from "react";
import { mergeProps, useMenuItem, useButton } from "react-aria";
import type { TreeState } from "react-stately";

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
      ref: mergeRefs(ref, props.ref!),
      className: classes,
      "data-focused": isFocused,
      "aria-label": item.props["aria-label"],
    };

    return createElement(
      Root,
      mergeProps(customProps, buttonProps, menuItemProps),
      item.rendered
    );
  }
);
