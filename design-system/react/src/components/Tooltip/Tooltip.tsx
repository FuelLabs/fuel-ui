import { cx } from "@fuel-ui/css"
import * as RTooltip from "@radix-ui/react-tooltip"
import type { ReactNode } from "react"

import { createComponent } from "../../utils"

import * as styles from "./styles"

export type TooltipProps = RTooltip.TooltipProps & {
  content: ReactNode
  side?: RTooltip.PopperContentProps["side"]
  align?: RTooltip.PopperContentProps["align"]
  className?: string
  arrowClassName?: string
  sideOffset?: RTooltip.TooltipContentProps["sideOffset"]
  alignOffset?: RTooltip.TooltipContentProps["alignOffset"]
}

export const Tooltip = createComponent<TooltipProps>(
  ({
    children,
    content,
    side = "top",
    align,
    className,
    arrowClassName,
    sideOffset = 5,
    alignOffset,
    ...props
  }) =>
    !content ? (
      <>{children}</>
    ) : (
      <RTooltip.Provider>
        <RTooltip.Root {...props}>
          <RTooltip.Trigger asChild>{children}</RTooltip.Trigger>
          <RTooltip.Content
            className={cx(className, CLASSES.Content)}
            side={side}
            align={align}
            sideOffset={sideOffset}
            alignOffset={alignOffset}
          >
            <RTooltip.Arrow
              offset={5}
              width={11}
              height={5}
              className={cx(arrowClassName, CLASSES.Arrow)}
            />
            {content}
          </RTooltip.Content>
        </RTooltip.Root>
      </RTooltip.Provider>
    ),
)

const CLASSES = {
  Content: cx("fuel_TooltipContent", styles.content()),
  Arrow: cx("fuel_TooltipArrow", styles.arrow()),
}
