import { cx, styled } from "@fuel-ui/css";
import * as RPopover from "@radix-ui/react-popover";
import type { ReactNode } from "react";

import { createComponent } from "../../utils";
import { IconButton } from "../IconButton";

import * as styles from "./styles";

export type PopoverProps = RPopover.PopoverProps & {
  content: ReactNode;
  side?: RPopover.PopperContentProps["side"];
  align?: RPopover.PopperContentProps["align"];
  showCloseButton?: boolean;
  className?: string;
  arrowProps?: RPopover.PopoverArrowProps;
  arrowClassName?: string;
  closeButtonClassName?: string;
  contentProps?: RPopover.PopoverContentProps;
};

const Content = styled(RPopover.Content);

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
    arrowProps,
    contentProps,
    css,
    ...props
  }) => (
    <RPopover.Root {...props}>
      <RPopover.Trigger asChild>{children}</RPopover.Trigger>
      <Content
        css={css}
        className={cx(className, CLASSES.Content)}
        side={side}
        align={align}
        {...contentProps}
      >
        <RPopover.Arrow
          offset={0}
          width={15}
          height={5}
          {...arrowProps}
          className={cx(arrowClassName, CLASSES.Arrow)}
        />
        {showCloseButton && (
          <RPopover.Close
            aria-label="Close"
            className={cx(closeButtonClassName, CLASSES.CloseButton)}
            asChild
          >
            <IconButton
              size="xs"
              aria-label="Close"
              icon="X"
              color="gray"
              variant="link"
            />
          </RPopover.Close>
        )}
        {content}
      </Content>
    </RPopover.Root>
  )
);

const CLASSES = {
  Content: cx("fuel_popover--content", styles.content()),
  Arrow: cx("fuel_popover--arrow", styles.arrow()),
  CloseButton: cx("fuel_popover--closeBtn", styles.closeButton()),
};
