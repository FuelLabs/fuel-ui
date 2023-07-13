import { cx } from "@fuel-ui/css"
import { mergeRefs } from "@react-aria/utils"
import { Children, cloneElement } from "react"
import type { ReactElement } from "react"
import { createComponent } from "~/utils"

import { Button } from "../Button"
import type { ButtonProps } from "../Button"

import { useDialog } from "./Dialog"

type ElementType = "button"
type DialogTriggerProps = ButtonProps & {
  asChild?: boolean
}

type ObjProps = {
  id: string
}

export const DialogTrigger = createComponent<
  DialogTriggerProps,
  ObjProps,
  unknown,
  ElementType
>(({ ref, className, asChild = true, children, ...props }) => {
  const classes = cx("fuel_DialogTrigger", className)
  const { state, triggerRef } = useDialog()

  function handleToggle() {
    state?.toggle()
  }

  if (asChild) {
    return (
      <>
        {Children.toArray(Children.only(children)).map((child) => {
          return cloneElement(child as ReactElement, {
            ref: mergeRefs(ref, triggerRef as never),
            onPress: handleToggle,
            className: classes,
          })
        })}
      </>
    )
  }

  return (
    <Button
      {...props}
      ref={mergeRefs(ref, triggerRef as never)}
      onPress={handleToggle}
    >
      {children}
    </Button>
  )
})

DialogTrigger.id = "DialogTrigger"
