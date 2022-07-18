import { cx } from "@fuel-ui/css";
import { Cross1Icon } from "@radix-ui/react-icons";
import * as RPopover from "@radix-ui/react-popover";
import type { ReactNode } from "react";

import { createComponent } from "../../utils";

import * as styles from "./styles";

export type PopoverProps = RPopover.PopoverProps & {
  content: ReactNode;
  side?: RPopover.PopperContentProps["side"];
  align?: RPopover.PopperContentProps["align"];
  showCloseButton?: boolean;
  className?: string;
  arrowClassName?: string;
  closeButtonClassName?: string;
  sideOffset?: RPopover.PopoverContentProps["sideOffset"];
  alignOffset?: RPopover.PopoverContentProps["alignOffset"];
};

export const Popover = createComponent<PopoverProps>(
  ({
    children,
    content,
    side = "bottom",
    align,
    showCloseButton,
    className,
    arrowClassName,
    closeButtonClassName,
    sideOffset = 10,
    alignOffset,
    ...props
  }) => (
    <RPopover.Root {...props}>
      <RPopover.Trigger asChild>{children}</RPopover.Trigger>
      <RPopover.Content
        className={cx(className, CLASSES.Content)}
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
      >
        <RPopover.Arrow
          offset={4}
          width={15}
          height={5}
          className={cx(arrowClassName, CLASSES.Arrow)}
        />
        {showCloseButton && (
          <RPopover.Close
            aria-label="Close"
            className={cx(closeButtonClassName, CLASSES.CloseButton)}
          >
            <Cross1Icon />
          </RPopover.Close>
        )}
        {content}
      </RPopover.Content>
    </RPopover.Root>
  )
);

const CLASSES = {
  Content: cx("fuel_popover--content", styles.content()),
  Arrow: cx("fuel_popover--arrow", styles.arrow()),
  CloseButton: cx("fuel_popover--closeBtn", styles.closeButton()),
};
