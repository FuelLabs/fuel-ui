/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ThemeUtilsCSS } from "@fuel-ui/css";
import { cx, styled } from "@fuel-ui/css";
import { mergeRefs } from "@react-aria/utils";
import type { FC, Key } from "react";
import { createElement, useRef } from "react";
import { FocusScope, mergeProps, useMenu } from "react-aria";
import type { TreeProps, ItemProps } from "react-stately";
import { Item, useTreeState } from "react-stately";

import type { HTMLProps } from "../../utils";
import { createComponent } from "../../utils";
import { omit } from "../../utils/helpers";
import type { ButtonProps } from "../Button";

import { MenuListItem } from "./MenuListItem";
import * as styles from "./styles";

export type MenuProps = HTMLProps["ul"] &
  TreeProps<any> & {
    onAction?: (key: Key) => void;
    autoFocus?: boolean;
  };

type ObjProps = {
  Item: FC<
    ItemProps<{
      onPress?: ButtonProps["onPress"];
      className?: string;
      css?: ThemeUtilsCSS;
    }>
  >;
};

const Root = styled("ul");

export const Menu = createComponent<MenuProps, ObjProps>(
  ({ className, onAction, autoFocus, selectionMode = "none", ...props }) => {
    const ref = useRef<HTMLUListElement | null>(null);
    const state = useTreeState({ ...props, selectionMode });
    const { menuProps } = useMenu(props, state, ref);
    const classes = cx("fuel_menu", className, styles.menu());
    const customProps = {
      ...omit(["disabledKeys"], props),
      ref: mergeRefs(ref, props.ref!),
      className: classes,
    };

    const children = [...state.collection].map((item) => (
      <MenuListItem
        className={item.props.className}
        key={item.key}
        item={item}
        state={state}
        onAction={onAction}
      />
    ));

    const element = createElement(
      Root,
      mergeProps(menuProps, customProps),
      children
    );

    return <FocusScope autoFocus={autoFocus}>{element}</FocusScope>;
  }
);

Menu.Item = Item;
