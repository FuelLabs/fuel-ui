import { cx } from "@fuel-ui/css"
import type { ReactNode } from "react"
import { FocusScope, mergeProps } from "react-aria"

import { useDialog } from ".."
import { createComponent, useCreateStyledElement } from "../../utils"

import * as styles from "./styles"

export type DialogContentProps = {
  overlayClassName?: string
  closeClassName?: string
  hideCloseButton?: boolean
  children: ReactNode
  className?: string
  onClose?: () => void
}

type ObjProps = {
  id: string
}

export const DialogContent = createComponent<DialogContentProps, ObjProps>(
  ({ as = "div", children, className, ...props }) => {
    const dialogProps = useDialog()
    const classes = cx("fuel_Dialog_content", className)

    const nextProps = {
      ...mergeProps(
        props,
        dialogProps.overlayProps!,
        dialogProps.dialogProps!,
        dialogProps.modalProps!,
      ),
      ref: dialogProps.triggerRef,
      className: classes,
    }

    return useCreateStyledElement(
      as,
      styles.content,
      null,
      nextProps,
      <FocusScope contain autoFocus>
        {children}
      </FocusScope>,
    )
  },
)

DialogContent.id = "DialogContent"
