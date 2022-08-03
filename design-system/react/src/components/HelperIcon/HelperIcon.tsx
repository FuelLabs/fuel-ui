import { css, cx } from "@fuel-ui/css";
import type { ReactNode } from "react";

import { createComponent } from "../../utils";
import type { FlexProps } from "../Flex";
import { Flex } from "../Flex";
import { Icon } from "../Icon";
import { Tooltip } from "../Tooltip";

export type HelperIconProps = FlexProps & {
  message: ReactNode;
};

export const HelperIcon = createComponent<HelperIconProps>(
  ({ children, className, ...props }) => {
    const classes = cx("fuel_helper-icon", className, styles());
    return (
      <Flex align="center" gap="$2" {...props} className={classes}>
        {children}
        <Tooltip content={props.message}>
          <Icon icon="Question" aria-label="Helper Icon" />
        </Tooltip>
      </Flex>
    );
  }
);

const styles = css({
  display: "inline-flex",

  "& .fuel_icon": {
    color: "$gray8",
  },
});
