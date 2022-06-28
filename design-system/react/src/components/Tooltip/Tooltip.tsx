import { cx } from "@test-changeset/css";
import * as RTooltip from "@radix-ui/react-tooltip";
import type { ReactElement } from "react";

import { createComponent } from "../../utils";

import * as styles from "./styles";

export type TooltipProps = RTooltip.TooltipProps & {
  content: ReactElement;
  side?: RTooltip.PopperContentProps["side"];
  align?: RTooltip.PopperContentProps["align"];
  arrowClassName?: string;
};

export const Tooltip = createComponent<TooltipProps>(
  ({
    children,
    content,
    side = "top",
    align,
    className,
    arrowClassName,
    ...props
  }) => (
    <RTooltip.Provider>
      <RTooltip.Root {...props}>
        <RTooltip.Trigger asChild>{children}</RTooltip.Trigger>
        <RTooltip.Content
          className={cx(className, CLASSES.Content)}
          side={side}
          align={align}
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
  )
);

const CLASSES = {
  Content: cx("fuel_tooltip--content", styles.content()),
  Arrow: cx("fuel_tooltip--arrow", styles.arrow()),
};
