import { Components } from "~/defs"
import { createStyle } from "~/hooks"

export const styles = createStyle(Components.ButtonGroup, {
  root: {
    display: "flex",
    alignItems: "center",

    "& > .fuel_Button ~ .fuel_Button": {
      marginLeft: 1,
    },
    "& > .fuel_Button:first-of-type": {
      borderTopRightRadius: "$0",
      borderBottomRightRadius: "$0",
    },
    "& > .fuel_Button:last-of-type": {
      borderTopLeftRadius: "$0",
      borderBottomLeftRadius: "$0",
    },
    "& > .fuel_Button:not(:first-of-type,:last-of-type)": {
      borderRadius: "$0",
    },
    "& > .fuel_Button:focus-visible": {
      zIndex: 1,
      position: "relative",
    },
  },
})
