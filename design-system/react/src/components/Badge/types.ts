import type { LayerIntent } from "@fuel-ui/css"
import type { Components } from "~/defs"
import type { CreateComponent, HTMLProps } from "~/utils"

export type BadgeVariants = "solid" | "outlined" | "ghost"
export type BadgeProps = HTMLProps["span"] & {
  intent?: LayerIntent
  variant?: BadgeVariants
}

export type BadgeDef = CreateComponent<{
  type: "span"
  component: Components.Badge
  element: HTMLSpanElement
  props: BadgeProps
  styles: "root"
}>
