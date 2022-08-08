import { cx } from "@fuel-ui/css";

import type { CreateComponent } from "../../utils";
import { createComponent } from "../../utils";
import type { FlexProps } from "../Flex";
import { Flex } from "../Flex";

import { CardBody } from "./CardBody";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";
import * as styles from "./styles";

export type CardProps = FlexProps;

export const Card = createComponent<CardProps>(
  ({ direction = "column", children, className, ...props }) => {
    const classes = cx("fuel_card", className, styles.card());
    const customProps = { ...props, direction, className: classes };

    return (
      <Flex as="article" {...customProps}>
        {children}
      </Flex>
    );
  }
) as CreateComponent<CardProps> & {
  id: string;
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
};

Card.id = "Card";
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
