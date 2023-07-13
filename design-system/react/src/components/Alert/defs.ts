import type { Components } from "~/defs"
import type { CreateComponent } from "~/utils"

import type { BoxProps } from "../Box"
import type { FlexProps } from "../Box/Flex"
import type { ButtonProps } from "../Button"

import type { AlertActions } from "./AlertActions"
import type { AlertButton } from "./AlertButton"
import type { AlertDescription } from "./AlertDescription"
import type { AlertTitle } from "./AlertTitle"

export type AlertStatus = "info" | "warning" | "success" | "error"

export type AlertProps = BoxProps & {
  direction?: "row" | "column"
  status?: AlertStatus
  hideIcon?: boolean
}

export type AlertActionsProps = FlexProps
export type AlertButtonProps = ButtonProps
export type AlertDescriptionProps = BoxProps
export type AlertTitleProps = FlexProps

export type AlertNS = {
  id: string
  Title: typeof AlertTitle
  Description: typeof AlertDescription
  Actions: typeof AlertActions
  Button: typeof AlertButton
}

export type AlertDef = CreateComponent<{
  omit: "as"
  type: "div"
  props: AlertProps
  component: Components.Alert
  element: HTMLDivElement
  namespace: AlertNS
  styles:
    | "root"
    | "icon"
    | "content"
    | "title"
    | "description"
    | "actions"
    | "button"
}>

export type AlertActionsDef = CreateComponent<{
  type: "div"
  props: AlertActionsProps
  component: Components.AlertActions
  element: HTMLDivElement
  namespace: {
    id: string
  }
}>

export type AlertButtonDef = CreateComponent<{
  type: "button"
  props: AlertButtonProps
  component: Components.AlertButton
  element: HTMLButtonElement
  namespace: {
    id: string
  }
}>

export type AlertDescriptionDef = CreateComponent<{
  type: "div"
  props: AlertDescriptionProps
  component: Components.AlertDescription
  element: HTMLDivElement
}>

export type AlertTitleDef = CreateComponent<{
  type: "div"
  props: AlertTitleProps
  component: Components.AlertTitle
  element: HTMLDivElement
}>
