import { css, cx, styled } from "@fuel-ui/css";
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
    const classes = cx("fuel_helper-icon", className, styles());
    return (
      <Flex align="center" gap="$2" {...props} className={classes}>
        {children}
        <Tooltip content={props.message}>
          <Icon aria-label="Helper Icon" />
        </Tooltip>
      </Flex>
    );
  }
);

const styles = css({
  display: "inline-flex",
});
