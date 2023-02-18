import { cx } from '@fuel-ui/css';

import { createComponent } from '../../utils';
import type { FlexProps } from '../Flex';
import { Flex } from '../Flex';

import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';
import * as styles from './styles';

export type CardProps = FlexProps;

type ObjProps = {
  id: string;
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
};

export const Card = createComponent<CardProps, ObjProps>(
  ({ direction = 'column', children, className, ...props }) => {
    const classes = cx('fuel_Card', className, styles.card());
    const customProps = { ...props, direction, className: classes };

    return (
      <Flex as="article" {...customProps}>
        {children}
      </Flex>
    );
  }
);

Card.id = 'Card';
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
