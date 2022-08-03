import type { Colors } from "@fuel-ui/css";
import { allColors, css, cx, styled } from "@fuel-ui/css";
import { useLink } from "@react-aria/link";
import { mergeProps } from "@react-aria/utils";
import { createElement, useRef } from "react";

import type { HTMLProps } from "../../utils";
import { createComponent } from "../../utils";
import { Icon } from "../Icon";

export type LinkProps = HTMLProps["a"] & {
  isExternal?: boolean;
  color?: Colors;
};

const Root = styled("a");

export const Link = createComponent<LinkProps>(
  ({ isExternal, className, children, color, ...props }) => {
    const ref = useRef<HTMLLinkElement | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { linkProps } = useLink(props as any, ref);
    const customProps = {
      role: "link",
      className: cx("fuel_link", className, styles.link({ color })),
      ...(isExternal && { target: "_blank", rel: "noopener noreferrer" }),
    };

    return createElement(
      Root,
      mergeProps(props, customProps, linkProps),
      <>
        {children} {isExternal && <Icon icon="LinkSimple" />}
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
