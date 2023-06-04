import { _unstable_createComponent } from '../../utils';
import { Flex } from '../Box/Flex';

import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';
import type { CardDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles } from '~/hooks';

export const Card = _unstable_createComponent<CardDef>(
  Components.Card,
  ({ direction = 'column', withDividers, children, ...props }) => {
    const classes = useStyles(styles, props);
    const customProps = {
      ...props,
      direction,
      className: classes.root.className,
    };

    return (
      <Flex as="article" {...customProps} data-dividers={withDividers}>
        {children}
      </Flex>
    );
  }
);

Card.id = 'Card';
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
