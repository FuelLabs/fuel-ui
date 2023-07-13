import type { KeyboardEvent, ReactElement, ReactNode } from "react"
import { Children, cloneElement } from "react"
import { FocusScope, mergeProps, useFocusManager } from "react-aria"

import { createComponent } from "../../utils"

import type { FocusScopeProps } from "./FocusScope"

type GroupChildrenProps = {
  children: ReactNode
}

const GroupChildren = createComponent<GroupChildrenProps>(({ children }) => {
  const { onKeyDown } = useFocusNavigator()

  if (isRightChildrenType(children)) {
    return (
      <>
        {Children.map(children as ReactElement[], (child: ReactElement) => {
          return cloneElement(child, mergeProps(child.props, { onKeyDown }))
        })}
      </>
    )
  }

  throw new Error("Children type not accepted")
})

export type FocusArrowNavigatorProps = FocusScopeProps & {
  children: ReactNode
}

export const FocusArrowNavigator = createComponent<FocusArrowNavigatorProps>(
  ({ children, ...props }) => (
    <FocusScope {...props}>
      <GroupChildren>{children}</GroupChildren>
    </FocusScope>
  ),
)

export function useFocusNavigator() {
  const focusManager = useFocusManager()

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      focusManager.focusNext()
    }
    if (e.key === "ArrowLeft") {
      focusManager.focusPrevious()
    }
    if (e.key === "ArrowUp") {
      focusManager.focusNext()
    }
    if (e.key === "ArrowDown") {
      focusManager.focusPrevious()
    }
  }

  return {
    onKeyDown,
  }
}

function isRightChildrenType(children: ReactNode) {
  return (
    typeof children !== "boolean" &&
    typeof children !== "string" &&
    typeof children !== "undefined" &&
    typeof children !== "number"
  )
}
