import { cssObj } from "@fuel-ui/css"

export const styles = {
  heading: cssObj({
    m: "$0",
  }),
  popover: cssObj({
    padding: "$0",
    border: "1px solid transparent",
    outlineColor: "transparent",
    outline: "none !important",
  }),
  popoverContainer: cssObj({
    layer: "layer-card",
    px: "$3",
    py: "$3",
    flex: 1,
    flexDirection: "column",
    gap: "$1",
    background: "transparent",
    borderColor: "transparent",

    h5: {
      lineHeight: 1,
      pb: "$2",
    },

    '.fuel_Icon[data-error="false"]': {
      color: "$intentsError9",
    },
    '.fuel_Icon[data-error="true"]': {
      color: "$brand",
    },
  }),
  strengthIndicatorContainer: cssObj({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "$2",
    width: "$full",
    mb: "$2",
  }),
  strengthIndicator: cssObj({
    height: "6px",
    width: "$full",
    borderRadius: "$full",
    backgroundColor: "$intentsBase7",

    '&[data-strength="weak"]': {
      backgroundColor: "$intentsError9",
    },
    '&[data-strength="average"]': {
      backgroundColor: "$intentsWarning9",
    },
    '&[data-strength="strong"]': {
      backgroundColor: "$brand",
    },
  }),
  rulesHeader: cssObj({
    color: "$intentsBase12",
    pb: "$1",
  }),
  arrow: cssObj({
    fill: "$overlayBg",
  }),
}
