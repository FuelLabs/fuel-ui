import { Children, cloneElement, createElement } from "react"
import { Components } from "~/defs"
import { useElementProps, useStyles } from "~/hooks"

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from "../../utils"

import { useAlertProps } from "./Alert"
import type * as t from "./defs"
import { styles } from "./styles"

const BUTTON_COLORS = {
  info: "blue",
  warning: "amber",
  success: "green",
  error: "red",
}

const _AlertActions = _unstable_createComponent<t.AlertActionsDef>(
  Components.AlertActions,
  ({ as = "footer", children, ...props }) => {
    const classes = useStyles(styles)
    const elementProps = useElementProps(props, classes.actions)
    const { status = "info" } = useAlertProps()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const customChildren = Children.toArray(children).map((child: any) => {
      if (child?.type?.id === "AlertButton") {
        return cloneElement(child, { color: BUTTON_COLORS[status] })
      }
      return child
    })

    return createElement(as, elementProps, <>{customChildren}</>)
  },
)

export const AlertActions =
  createPolymorphicComponent<t.AlertActionsDef>(_AlertActions)

AlertActions.id = "AlertActions"
