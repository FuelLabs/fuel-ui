import { cx, styled } from "@fuel/css";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { createElement } from "react";

import { createComponent } from "../../utils";

import * as styles from "./styles";

export type TabsListProps = TabsPrimitive.TabsListProps;

const Root = styled(TabsPrimitive.List);
export const TabsList = createComponent<TabsListProps>(
  ({ children, className, ...props }) => {
    const classes = cx("fuel_tabs--list", className, styles.list());
    return createElement(Root, { ...props, className: classes }, children);
  }
);
