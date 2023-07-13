import { Components } from "~/defs"
import { createStyle } from "~/hooks"

export const styles = createStyle(Components.Copyable, {
  root: {
    display: "inline-flex",
  },
  icon: {
    py: "$3",
    px: "$0",
    height: "$4",
    color: "$textIcon",
  },
})
