import { css, cx } from "@fuel-ui/css";
import type { ReactNode } from "react";

import type { CardProps } from "..";
import { useCardListContext, Flex, Card } from "..";
import { createComponent } from "../../utils";

export type CardListProps = CardProps & {
  isActive?: boolean;
  rightEl?: ReactNode;
};

export const CardListItem = createComponent<CardListProps>(
  ({ children, className, rightEl, isActive, ...props }) => {
    const { isClickable } = useCardListContext();
    const classes = cx(
      "fuel_card-list--item",
      className,
      styles.root({ isActive, isClickable })
    );
    return (
      <Card
        direction={"row"}
        {...(isClickable && { tabIndex: 0 })}
        {...props}
        className={classes}
      >
        <Flex align="center" gap="$3" css={{ flex: 1 }}>
          {children}
        </Flex>
        {rightEl}
      </Card>
    );
  }
);

const styles = {
  root: css({
    position: "relative",
    overflow: "hidden",
    py: "$3",
    px: "$4",
    gap: "$3",
    borderColor: "transparent",

    variants: {
      isActive: {
        true: {
          "&::after": {
            position: "absolute",
            display: "block",
            content: '""',
            top: 0,
            left: 0,
            width: "3px",
            height: "100%",
            background: "$accent11",
          },
        },
      },
      isClickable: {
        true: {
          "&:hover, &:focus-within": {
            outline: "none",
            borderColor: "$borderColor",
          },
        },
      },
    },

    defaultVariants: {
      isActive: false,
      isClickable: false,
    },
  }),
};
