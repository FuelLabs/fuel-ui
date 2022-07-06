import { cx, styled } from "@fuel-ui/css";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { createElement } from "react";

import type { CreateComponent } from "../../utils";
import { createComponent } from "../../utils";

import { TabsContent } from "./TabsContent";
import { TabsList } from "./TabsList";
import { TabsTrigger } from "./TabsTrigger";
import * as styles from "./styles";

export type TabsProps = TabsPrimitive.TabsProps;

const Root = styled(TabsPrimitive.Root);
export const Tabs = createComponent<TabsProps>(
  ({ children, className, ...props }) => {
    const classes = cx("fuel_tabs", className, styles.root());
    return createElement(Root, { ...props, className: classes }, children);
  }
) as CreateComponent<TabsProps> & {
  id: string;
  List: typeof TabsList;
  Trigger: typeof TabsTrigger;
  Content: typeof TabsContent;
};

Tabs.id = "Tabs";
Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;
