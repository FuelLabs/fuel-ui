import type { ButtonProps } from "../Button";
import { Button } from "../Button";

import { createComponent } from "../../utils";
import type { HTMLProps } from "../../utils";

export type ButtonLinkProps = ButtonProps &
  HTMLProps["a"] & {
    isExternal?: boolean;
  };

export const ButtonLink = createComponent<ButtonLinkProps>(
  ({ as = "a", role = "link", isExternal, ...props }) => {
    const customProps = {
      ...props,
      ...(isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
        rightIcon: "BiLinkExternal" as ButtonProps["rightIcon"],
      }),
    };

    return (
      <Button as={as} {...customProps} variant="link" role={role} isLink />
    );
  }
);
