import { cx } from "@fuel-ui/css"
import { createComponent } from "~/utils"

import type { BoxProps } from ".."
import { Box } from ".."

type DrawerBodyProps = BoxProps

export const DrawerBody = createComponent<DrawerBodyProps>(
  ({ className, ...props }) => {
    const classes = cx("fuel_DrawerBody", className)
    return <Box {...props} className={classes} />
  },
)
