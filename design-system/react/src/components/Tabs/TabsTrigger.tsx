import { cx, styled } from "@fuel/css";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { createElement } from "react";

import { createComponent } from "../../utils";

import * as styles from "./styles";

export type TabsTriggerProps = TabsPrimitive.TabsTriggerProps;

const Root = styled(TabsPrimitive.Trigger);
export const TabsTrigger = createComponent<TabsTriggerProps>(
  ({ children, className, ...props }) => {
    const classes = cx("fuel_tabs--trigger", className, styles.trigger());
    return createElement(Root, { ...props, className: classes }, children);
  }
);
