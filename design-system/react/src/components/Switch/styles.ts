import { css } from "@fuel-ui/css"

export const root = css({
  all: "unset",
  layer: "input-base",
  position: "relative",
  width: 42,
  height: 25,
  borderRadius: "$full",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",

  "&:focus-visible": {
    outline: "2px solid $intentsBase4",
  },

  "& .fuel_Icon": {
    color: "inherit",
  },

  variants: {
    size: {
      sm: {
        width: 35,
        height: 18,
      },
      md: {
        width: 42,
        height: 25,
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
})

export const thumb = css({
  display: "block",
  backgroundColor: "$border",
  borderRadius: "$full",
  transition: "all 100ms",
  transform: "translateX(2px)",
  willChange: "transform",

  '&[data-state="checked"]': {
    transform: "translateX(19px)",
    backgroundColor: "$brand",
  },

  variants: {
    size: {
      sm: {
        width: 13,
        height: 13,
      },
      md: {
        width: 20,
        height: 20,
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
})
