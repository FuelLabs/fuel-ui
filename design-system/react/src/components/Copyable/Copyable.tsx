import { css, cx } from "@fuel-ui/css";
import type { ReactNode } from "react";
import { useCopyToClipboard } from "react-use";

import { createComponent } from "../../utils";
import type { FlexProps } from "../Flex";
import { Flex } from "../Flex";
import { IconButton } from "../IconButton";

export type CopyableProps = Omit<FlexProps, "children"> & {
  value: string;
  children: ReactNode;
};

export const Copyable = createComponent<CopyableProps>(
  ({ children, className, value, ...props }) => {
    const classes = cx("fuel_copyable", className, styles.root());
    const iconClass = cx("fuel_copyable-icon", styles.icon());
    const [, copy] = useCopyToClipboard();

    return (
      <Flex align="center" gap="$2" {...props} className={classes}>
        {children}
        <IconButton
          color="gray"
          tooltip="Click here to copy to clipboard"
          onPress={() => copy(value)}
          variant="link"
          icon="CopySimple"
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
    color: "$gray8 !important",
  }),
};
