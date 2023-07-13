export type TextSizes =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"

const TEXT_SIZE_MAP = {
  xs: ["$xs", "1rem"],
  sm: ["$sm", "1.25rem"],
  base: ["$base", "1.5rem"],
  lg: ["$lg", "1.75rem"],
  xl: ["$xl", "1.75rem"],
  "2xl": ["$2xl", "2rem"],
  "3xl": ["$3xl", "2.25rem"],
  "4xl": ["$4xl", "2.5rem"],
  "5xl": ["$5xl", "1"],
  "6xl": ["$6xl", "1"],
  "7xl": ["$7xl", "1"],
}

export const textSize = (value: TextSizes) => ({
  fontSize: TEXT_SIZE_MAP[value][0],
  lineHeight: TEXT_SIZE_MAP[value][1],
})

textSize.__keys = Object.keys(TEXT_SIZE_MAP) as TextSizes[]
