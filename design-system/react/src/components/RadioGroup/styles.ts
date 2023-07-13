import { css } from "@fuel-ui/css"

export const root = css({
  display: "flex",

  "& label": {
    fontSize: "$base",
  },
})

export const item = css({
  all: "unset",
  cursor: "pointer",
  overflow: "clip",
  position: "relative",
  width: "$5",
  height: "$5",
  borderRadius: "$full",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "$base",
  border: "1px solid $border",
  transition: "all .2s",

  "&:after": {
    position: "absolute",
    display: "block",
    content: '""',
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "100%",
    transform: "translate(-2px, -2px)",
  },

  "&:focus-visible": {
    outline: "2px solid $intentsBase4",
  },

  '&[data-state="checked"]': {
    background: "$brand",
    borderColor: "$brand",
  },

  "& .fuel_Icon": {
    color: "inherit",
  },

  "&[aria-disabled=true]": {
    cursor: "default",
  },

  '&[aria-disabled=true]:not([data-state="unchecked"])': {
    background: "$inputDisabledBorder",
    borderColor: "$inputDisabledBorder",
  },
})

export const indicator = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  position: "relative",

  "&::after": {
    content: '""',
    display: "block",
    width: "$2",
    height: "$2",
    borderRadius: "50%",
    backgroundColor: "$bodyBg",
  },
})
