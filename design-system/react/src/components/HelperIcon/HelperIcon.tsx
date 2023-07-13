import { createElement } from "react"
import { Components } from "~/defs"
import { createStyle, useElementProps, useStyles } from "~/hooks"

import { _unstable_createComponent } from "../../utils"
import { Icon } from "../Icon"
import { Tooltip } from "../Tooltip"

import type * as t from "./defs"

export const HelperIcon = _unstable_createComponent<t.HelperIconDef>(
  Components.HelperIcon,
  ({ as = "div", children, iconSize = 18, ...props }) => {
    const classes = useStyles(styles, props)
    const elementProps = useElementProps(props, classes.root)
    return createElement(
      as,
      elementProps,
      <>
        {children}
        <Tooltip content={props.message}>
          <Icon
            icon="HelpOctagon"
            aria-label="Helper Icon"
            color="textIcon"
            size={iconSize}
          />
        </Tooltip>
      </>,
    )
  },
)

const styles = createStyle(Components.HelperIcon, {
  root: {
    display: "inline-flex",
    gap: "$2",
  },
})
