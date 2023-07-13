import { cx } from "@fuel-ui/css"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden"
import * as TablerIcons from "@tabler/icons-react"
import type { ReactElement } from "react"
import { createElement, useMemo, cloneElement } from "react"
import { Components } from "~/defs"
import { createStyle, useElementProps, useStyles } from "~/hooks"

import { _unstable_createComponent } from "../../utils"

import type * as t from "./defs"

export const Icon = _unstable_createComponent<t.IconDef>(
  Components.Icon,
  ({
    as = "i",
    label: initialLabel,
    inline,
    icon,
    color,
    className,
    wrapperClassName,
    css,
    size = 18,
    stroke = 2,
    ...props
  }) => {
    const iconProps = {
      className: cx("fuel_Icon", `fuel_Icon-${icon}`, className),
      focusable: false,
      "aria-hidden": true,
      size,
      stroke,
    }

    const iconElement = useMemo<ReactElement>(
      (() => {
        if (typeof icon === "string") {
          const Component = TablerIcons[`Icon${icon}`]
          if (!Component) {
            throw new Error(`Icon ${icon} not found`)
          }
          return <Component />
        }
        return icon
      }) as () => ReactElement,
      [icon],
    )

    let label = initialLabel || props["aria-label"]
    if (!label && typeof icon === "string") {
      label = `Icon ${icon}`
    }

    const classes = useStyles(styles, {
      ...props,
      css: {
        display: inline ? "inline-flex" : "flex",
        ...(color && { color: `$${color}` }),
        ...css,
      },
    })

    const elementProps = useElementProps(props, classes.root, {
      "aria-label": label || "",
      className: wrapperClassName,
    })

    return createElement(
      as,
      elementProps,
      <>
        {cloneElement(iconElement, iconProps)}
        <VisuallyHidden.Root>{label || icon}</VisuallyHidden.Root>
      </>,
    )
  },
)

const iconList = Object.keys(TablerIcons) as t.Icons[]

Icon.id = "Icon"
Icon.iconList = iconList
Icon.is = (icon: t.Icons) => icon

const styles = createStyle(Components.Icon, {
  root: {
    is: ["centered"],
  },
})
