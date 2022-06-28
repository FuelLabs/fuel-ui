import { cx } from "@test-changeset/css";

import type { CreateComponent } from "../../utils";
import { createComponent } from "../../utils";
import type { FlexProps } from "../Flex";
import { Flex } from "../Flex";
import { useFuelTheme } from "../ThemeProvider";

import { CardBody } from "./CardBody";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";
import * as styles from "./styles";

export type CardProps = FlexProps & {
  /**
   * This prop will remove boxShadow/borderColor
   */
  within?: boolean;
};

export const Card = createComponent<CardProps>(
  ({ direction = "column", within, children, className, css, ...props }) => {
    const classes = cx("fuel_card", className, styles.card());
    const customProps = { ...props, direction, className: classes };
    const { theme } = useFuelTheme();
    const boxShadow = theme === "light" ? "$sm" : "none";
    const borderColor = theme === "dark" ? "$borderColor" : "transparent";

    return (
      <Flex
        as="article"
        {...customProps}
        css={{ ...(!within && { boxShadow, borderColor }), ...css }}
      >
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
