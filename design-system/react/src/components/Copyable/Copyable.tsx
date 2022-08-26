import { css, cx } from "@fuel-ui/css";
import type { ReactNode } from "react";

import { createComponent } from "../../utils";
import type { FlexProps } from "../Flex";
import { Flex } from "../Flex";
import { Icon } from "../Icon";
import { IconButton } from "../IconButton";

export type CopyableProps = Omit<FlexProps, "children"> & {
  value: string;
  children: ReactNode;
  tooltipMessage?: string;
};

export const Copyable = createComponent<CopyableProps>(
  ({
    children,
    className,
    value,
    tooltipMessage = "Click here to copy to clipboard",
    ...props
  }) => {
    const classes = cx("fuel_copyable", className, styles.root());
    const iconClass = cx("fuel_copyable-icon", styles.icon());

    async function handleCopy() {
      await navigator.clipboard.writeText(value);
    }

    return (
      <Flex align="center" gap="$2" {...props} className={classes}>
        {children}
        <IconButton
          color="gray"
          tooltip={tooltipMessage}
          onPress={handleCopy}
          variant="link"
          icon={<Icon icon="CopySimple" size={16} />}
          aria-label="Copy to clipboard"
          className={iconClass}
        />
      </Flex>
    );
  }
);

const styles = {
  root: css({
    display: "inline-flex",
  }),
  icon: css({
    // TODO: remove important from here
    px: "$0 !important",
    height: "$4 !important",
    color: "$gray8 !important",
  }),
};
