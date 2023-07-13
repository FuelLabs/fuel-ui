import { cx } from "@fuel-ui/css"

import { createComponent } from "../../utils"
import type { FlexProps } from "../Box/Flex"
import { Flex } from "../Box/Flex"

import * as styles from "./styles"

export type CardHeaderProps = FlexProps & {
  space?: "normal" | "compact"
}

export const CardHeader = createComponent<CardHeaderProps>(
  ({ children, space = "normal", className, ...props }) => {
    const classes = cx("fuel_CardHeader", className, styles.header())
    const customProps = { ...props, className: classes }
    return (
      <Flex as="header" {...customProps} data-space={space}>
        {children}
      </Flex>
    )
  },
)
