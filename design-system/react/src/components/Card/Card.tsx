import { mergeRefs } from '@react-aria/utils';
import { createElement } from 'react';
import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';
import { useOnPress } from '~/hooks/useOnPress';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';

import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';
import type { CardDef } from './defs';
import { styles } from './styles';

const _Card = _unstable_createComponent<CardDef>(
  Components.Card,
  ({ as = 'article', ref, withDividers, children, ...props }) => {
    const classes = useStyles(styles, props);
    const { buttonProps, ref: cardRef } = useOnPress<
      CardDef['props'],
      CardDef['element']
    >(props, {
      elementType: as,
    });

    const isClickable = Boolean(props.onPress);
    const elementProps = {
      ...props,
      ref: mergeRefs(cardRef, ref),
      className: classes.root.className,
      'data-is-clickable': isClickable,
      'data-dividers': withDividers,
      ...(isClickable && {
        tabIndex: 0,
        role: 'button',
      }),
    };

    const finalProps = useElementProps(
      elementProps,
      isClickable ? buttonProps : {},
    );

    return createElement(as, finalProps, children);
  },
);

export const Card = createPolymorphicComponent<CardDef>(_Card);

Card.id = 'Card';
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
