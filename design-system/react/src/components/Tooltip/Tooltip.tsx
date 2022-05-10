import * as RTooltip from "@radix-ui/react-tooltip";
import type { ReactElement } from "react";

import * as styles from "./styles";

import type { Props } from "../../utils";
import { createComponent } from "../../utils";

export type TooltipProps = RTooltip.TooltipProps &
  Props<{
    content: ReactElement;
    side: RTooltip.PopperContentProps["side"];
    align: RTooltip.PopperContentProps["align"];
  }>;

export const Tooltip = createComponent<TooltipProps>(
  ({ children, content, side = "top", align, ...props }) => (
    <RTooltip.Provider>
      <RTooltip.Root {...props}>
        <RTooltip.Trigger asChild>{children}</RTooltip.Trigger>
        <RTooltip.Content
          className={styles.content()}
          side={side}
          align={align}
        >
          <RTooltip.Arrow
            offset={5}
            width={11}
            height={5}
            className={styles.arrow()}
          />
          {content}
        </RTooltip.Content>
      </RTooltip.Root>
    </RTooltip.Provider>
  )
);
