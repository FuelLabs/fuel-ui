import { createElement } from "react"
import { Components } from "~/defs"
import { createStyle, useElementProps, useStyles } from "~/hooks"

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from "../../utils"

import type * as t from "./defs"

const _Image = _unstable_createComponent<t.ImageDef>(
  Components.Image,
  ({ as = "img", ...props }) => {
    const classes = useStyles(styles, props)
    const elementProps = useElementProps(props, classes.root)
    return createElement(as, elementProps)
  },
)

export const Image = createPolymorphicComponent<t.ImageDef>(_Image)
const styles = createStyle(Components.Image, {
  root: {},
})
