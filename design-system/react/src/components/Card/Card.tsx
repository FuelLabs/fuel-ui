import { createElement } from 'react';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';

import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';
import type { CardDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles } from '~/hooks';

// eslint-disable-next-line @typescript-eslint/naming-convention
const _Card = _unstable_createComponent<CardDef>(
  Components.Card,
  ({ as = 'article', variant = 'ghost', withDividers, children, ...props }) => {
    const classes = useStyles(styles, { ...props, variant });
    const elementProps = {
      ...props,
      direction: 'column',
      className: classes.root.className,
      'data-dividers': withDividers,
    };

    return createElement(as, elementProps, children);
  }
);

export const Card = createPolymorphicComponent<CardDef>(_Card);

Card.id = 'Card';
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
