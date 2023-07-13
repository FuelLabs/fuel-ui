import { css } from "@fuel-ui/css"

export const header = css({
  px: "$4",
  py: "$4",
  borderBottom: "1px solid $bodyBg",

  "& .fuel_Heading": {
    margin: 0,
  },

  "&[data-space=compact]": {
    py: "$2",
    fontSize: "$sm",
  },
})

export const body = css({
  px: "$4",
  py: "$4",
})

export const footer = css({
  px: "$4",
  pb: "$4",
  pt: "$4",
  borderTop: "1px solid $bodyBg",
})

export const card = css({
  layer: "layer-card",
})
