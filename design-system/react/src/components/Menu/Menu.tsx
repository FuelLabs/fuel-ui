/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ThemeUtilsCSS } from "@fuel-ui/css";
import { cx, styled } from "@fuel-ui/css";
import { FocusScope } from "@react-aria/focus";
import { useMenu } from "@react-aria/menu";
import { mergeProps, mergeRefs } from "@react-aria/utils";
import { Item } from "@react-stately/collections";
import type { TreeProps } from "@react-stately/tree";
import { useTreeState } from "@react-stately/tree";
import type { ItemProps } from "@react-types/shared";
import type { FC, Key } from "react";
import { createElement, useRef } from "react";

import type { CreateComponent, HTMLProps } from "../../utils";
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

const Root = styled("ul");

export const Menu = createComponent<MenuProps>(
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
) as CreateComponent<MenuProps> & {
  Item: FC<
    ItemProps<any> & {
      onPress?: ButtonProps["onPress"];
      className?: string;
      css?: ThemeUtilsCSS;
    }
  >;
};

Menu.Item = Item;
