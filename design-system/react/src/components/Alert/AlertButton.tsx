import { cx } from "@fuel-ui/css";

import type { CreateComponent } from "../../utils";
import { createComponent } from "../../utils";
import type { ButtonProps } from "../Button";
import { Button } from "../Button";

export const AlertButton = createComponent<ButtonProps>(
  ({ children, className, ...props }) => {
    const classes = cx("fuel_alert--button", className);
    const customProps = { ...props, className: classes };
    return (
      <Button {...customProps} variant="link">
        {children}
      </Button>
    );
  }
) as CreateComponent<ButtonProps> & {
  id: string;
};

AlertButton.id = "AlertButton";
