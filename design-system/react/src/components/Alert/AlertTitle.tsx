import { createElement } from "react"
import { Components } from "~/defs"
import { useStyles, useElementProps } from "~/hooks"

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from "../../utils"
import { Heading } from "../Heading"

import type * as t from "./defs"
import { styles } from "./styles"

const _AlertTitle = _unstable_createComponent<t.AlertTitleDef>(
  Components.AlertTitle,
  ({ as = "header", children, ...props }) => {
    const classes = useStyles(styles)
    const elementProps = useElementProps(props, classes.title)
    return createElement(
      as,
      elementProps,
      <Heading as="h2">{children}</Heading>,
    )
  },
)

export const AlertTitle =
  createPolymorphicComponent<t.AlertTitleDef>(_AlertTitle)
