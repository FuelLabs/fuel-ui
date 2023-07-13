import type { Components } from "~/defs"
import type { CreateComponent, HTMLProps } from "~/utils"

import type { ButtonProps } from "../Button/defs"

type PropsToOmit = "isLink" | "variant"

export type ButtonLinkProps = Omit<ButtonProps, PropsToOmit> &
  HTMLProps["a"] & {
    isExternal?: boolean
  }

export type ButtonLinkDef = CreateComponent<{
  type: "a"
  element: HTMLButtonElement
  component: Components.ButtonLink
  props: ButtonLinkProps
  styles: "root"
  omit: PropsToOmit
}>
