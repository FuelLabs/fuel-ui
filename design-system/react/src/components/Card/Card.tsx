import { mergeProps } from '@react-aria/utils';
import { useStyles } from '~/hooks';
import { useOnPress } from '~/hooks/useOnPress';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';
import type { CardDef } from './defs';
import { styles } from './styles';

const _Card = _unstable_createComponent<CardDef>(
  Components.Card,
  ({ as = 'article', ref, variant, withDividers, children, ...props }) => {
    const classes = useStyles(styles, props);
    const { buttonProps } = useOnPress<CardDef['props'], CardDef['element']>(
      props,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref as any,
      { elementType: as },
    );

    const isClickable = Boolean(props.onPress);
    const elementProps = {
      ...props,
      ref,
      className: classes.root.className,
      'data-is-clickable': isClickable,
      'data-dividers': withDividers,
      'data-variant': variant,
      ...(isClickable && {
        tabIndex: 0,
        role: 'button',
      }),
    };

    const finalProps = mergeProps(elementProps, isClickable ? buttonProps : {});
    return _unstable_createEl(as, finalProps, children);
  },
);

export const Card = createPolymorphicComponent<CardDef>(_Card);

Card.id = 'Card';
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
