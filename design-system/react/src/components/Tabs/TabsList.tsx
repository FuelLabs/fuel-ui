import { cx } from "@fuel-ui/css"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { createComponent, useCreateStyledElement } from "../../utils"

import { useTabsProps } from "./Tabs"
import * as styles from "./styles"

export type TabsListProps = TabsPrimitive.TabsListProps

export const TabsList = createComponent<TabsListProps>(
  ({ children, className, ...props }) => {
    const classes = cx("fuel_TabsList", className)
    const { variant = "link" } = useTabsProps()
    return useCreateStyledElement(
      TabsPrimitive.List,
      styles.list,
      { variant },
      { ...props, className: classes },
      children,
    )
  },
)
