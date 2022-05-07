import { HTMLProps, createComponent } from "@/utils";
import { Button, ButtonProps } from "../Button/Button";
import { Icon } from "../Icon";

export type ButtonLinkProps = ButtonProps &
  HTMLProps["a"] & {
    isExternal?: boolean;
  };

export const ButtonLink = createComponent<ButtonLinkProps>(
  ({ as = "a", role = "link", isExternal, ...props }) => {
    const customProps = {
      ...props,
      ...(isExternal && { target: "_blank", rel: "noopener noreferrer" }),
      ...(isExternal && {
        rightIcon: <Icon icon="BiLinkExternal" />,
      }),
    };
    return <Button as={as} {...customProps} role={role} isLink />;
  }
);
