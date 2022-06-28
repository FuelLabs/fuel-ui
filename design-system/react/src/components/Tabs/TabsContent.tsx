import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cx, styled } from "@test-changeset/css";
import { createElement } from "react";

import { createComponent } from "../../utils";

import * as styles from "./styles";

export type TabsContentProps = TabsPrimitive.TabsContentProps;

const Root = styled(TabsPrimitive.Content);
export const TabsContent = createComponent<TabsContentProps>(
  ({ children, className, ...props }) => {
    const classes = cx("fuel_tabs--content", className, styles.content());
    return createElement(Root, { ...props, className: classes }, children);
  }
);
