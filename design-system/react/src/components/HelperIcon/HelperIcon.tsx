import { cx, styled } from "@fuel-ui/css";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import type { ReactNode } from "react";

import { createComponent } from "../../utils";
import type { FlexProps } from "../Flex";
import { Flex } from "../Flex";
import { Tooltip } from "../Tooltip";

export type HelperIconProps = FlexProps & {
  message: ReactNode;
};

const Icon = styled(QuestionMarkCircledIcon);

export const HelperIcon = createComponent<HelperIconProps>(
  ({ children, className, ...props }) => {
    const classes = cx("fuel_helper-icon", className);
    return (
      <Flex align="center" gap="$2" {...props}>
        {children}
        <Tooltip content={props.message}>
          <Icon className={classes} aria-label="Helper Icon" />
        </Tooltip>
      </Flex>
    );
  }
);
