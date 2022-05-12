import { cx } from "@fuel/css";

import { createComponent } from "../../utils";
import type { BoxProps } from "../Box";
import { Box } from "../Box";
import type { FlexProps } from "../Flex";
import { Flex } from "../Flex";

import * as styles from "./styles";

export type CardShadows = "sm" | "base" | "md" | "lg" | "xl";
export type CardProps = FlexProps & {
  shadow?: CardShadows;
};

const CardBase = createComponent<CardProps>(
  ({ direction = "column", shadow, children, className, ...props }) => {
    const classes = cx("fuel_card", className, styles.card({ shadow }));
    const customProps = { ...props, direction, className: classes };
    return (
      <Flex as="article" {...customProps}>
        {children}
      </Flex>
    );
  }
);

export const CardHeader = createComponent<FlexProps>(
  ({ children, className, ...props }) => {
    const classes = cx("fuel_card--header", className, styles.header());
    const customProps = { ...props, className: classes };
    return (
      <Flex as="header" {...customProps}>
        {children}
      </Flex>
    );
  }
);

export const CardBody = createComponent<BoxProps>(
  ({ children, className, ...props }) => {
    const classes = cx("fuel_card--body", className, styles.body());
    const customProps = { ...props, className: classes };
    return <Box {...customProps}>{children}</Box>;
  }
);

export const CardFooter = createComponent<FlexProps>(
  ({ children, className, ...props }) => {
    const classes = cx("fuel_card--footer", className, styles.footer());
    const customProps = { ...props, className: classes };
    return (
      <Flex as="footer" {...customProps}>
        {children}
      </Flex>
    );
  }
);

type CardComponent = typeof CardBase & {
  id: string;
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
};
export const Card = CardBase as CardComponent;
Card.id = "Card";
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
