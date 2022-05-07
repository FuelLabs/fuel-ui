import type { Colors } from "@fuel/css";
import { allColors, css, cx, styled } from "@fuel/css";
import { createElement } from "react";

import { Icon } from "../Icon";

import type { HTMLProps } from "@/utils";
import { createComponent } from "@/utils";

export type LinkProps = HTMLProps["a"] & {
  isExternal?: boolean;
  color?: Colors;
};

const Root = styled("a");

export const Link = createComponent<LinkProps>(
  ({ isExternal, className, children, color, ...props }) => {
    const customProps = {
      ...props,
      role: "link",
      className: cx(className, styles.link({ color })),
      ...(isExternal && { target: "_blank", rel: "noopener noreferrer" }),
    };

    return createElement(
      Root,
      customProps,
      <>
        {children} {isExternal && <Icon icon="BiLinkExternal" />}
      </>
    );
  }
);

const styles = {
  link: css({
    display: "inline-flex",
    alignItems: "center",
    gap: "$2",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },

    variants: {
      // TODO: adjust typings
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      color: (allColors as any[]).reduce(
        (obj, key) => ({
          ...obj,
          [key]: {
            color: `$${key}`,
            "&:visited": {
              color: `$${key}`,
            },
          },
        }),
        {}
      ),
    },

    defaultVariants: {
      color: "accent9",
    },
  }),
};
