/* eslint-disable @typescript-eslint/no-explicit-any */
import { cx } from "@fuel-ui/css"
import type { DOMAttributes, FocusableElement } from "@react-types/shared"
import { AnimatePresence } from "framer-motion"
import type { MutableRefObject } from "react"
import {
  useState,
  useEffect,
  useRef,
  Children,
  createContext,
  useContext,
} from "react"
import type { AriaOverlayProps, OverlayTriggerProps } from "react-aria"
import { OverlayContainer, useOverlay } from "react-aria"
import { useOverlayTriggerState } from "react-stately"
import type { OverlayTriggerState } from "react-stately"

import { createComponent } from "../../utils"

import { DrawerBody } from "./DrawerBody"
import { DrawerClose } from "./DrawerClose"
import { DrawerContent } from "./DrawerContent"
import { DrawerTrigger } from "./DrawerTrigger"

// ----------------------------------------------------------------------------
// Context
// ----------------------------------------------------------------------------

type DrawerSide = "right" | "left"
type DrawerSize = "sm" | "md" | "lg"

export type DrawerContext = {
  ref: React.MutableRefObject<HTMLDivElement | null>
  state?: OverlayTriggerState
  overlayProps: DOMAttributes<FocusableElement>
  underlayProps: DOMAttributes<FocusableElement>
  side: DrawerSide
  size: DrawerSize | string | number
  shouldCloseOnClickAway?: boolean
}

const ctx = createContext<DrawerContext>({} as DrawerContext)

export function useDrawer() {
  return useContext(ctx)
}

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------

export type DrawerProps = OverlayTriggerProps &
  Omit<AriaOverlayProps, "shouldCloseOnInteractOutside" | "type" | "side"> & {
    containerRef?: MutableRefObject<any>
    side?: DrawerSide
    size?: DrawerSize | string | number
    shouldCloseOnClickAway?: boolean
  }

type OmitProps = "as" | "className" | "css"
type ElementType = "div"
type ObjProps = {
  Body: typeof DrawerBody
  CloseButton: typeof DrawerClose
  Content: typeof DrawerContent
  Trigger: typeof DrawerTrigger
}

export const Drawer = createComponent<
  DrawerProps,
  ObjProps,
  OmitProps,
  ElementType
>(
  ({
    side = "right",
    size = "sm",
    shouldCloseOnClickAway = true,
    containerRef,
    children,
    ...opts
  }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [container, setContainer] = useState<HTMLElement | null>(null)
    const state = useOverlayTriggerState({
      ...opts,
      onOpenChange: (isOpen) => {
        if (!isOpen) opts.onClose?.()
      },
    })
    const { overlayProps, underlayProps } = useOverlay(
      {
        ...opts,
        isOpen: state.isOpen,
        onClose: () => {
          opts.onClose?.()
          state.close()
        },
      },
      ref,
    )

    const ctxProps = {
      ref,
      side,
      size,
      state,
      overlayProps,
      underlayProps,
      shouldCloseOnClickAway,
    }

    const overlayClassNames = cx("fuel_DrawerOverlay")
    const customChildren = Children.toArray(children).map((child: any) => {
      if (child?.type.id === "DrawerContent") {
        return (
          <OverlayContainer
            key={child?.type.id}
            {...(container && { portalContainer: container })}
            className={overlayClassNames}
            data-state={state.isOpen ? "open" : ""}
          >
            <AnimatePresence key={child.type.id}>
              {state.isOpen && <>{child}</>}
            </AnimatePresence>
          </OverlayContainer>
        )
      }
      return child
    })

    useEffect(() => {
      if (containerRef?.current) {
        setContainer(containerRef.current)
      }
    }, [containerRef?.current])

    return <ctx.Provider value={ctxProps}>{customChildren}</ctx.Provider>
  },
)

Drawer.Body = DrawerBody
Drawer.CloseButton = DrawerClose
Drawer.Content = DrawerContent
Drawer.Trigger = DrawerTrigger
