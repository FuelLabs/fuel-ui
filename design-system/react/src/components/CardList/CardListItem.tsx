import { _unstable_createComponent } from '../../utils';
import { Flex } from '../Box/Flex';
import { Card } from '../Card';

import type { CardListItemDef } from './defs';
import { useCardListContext } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

export const CardListItem = _unstable_createComponent<CardListItemDef>(
  Components.CardListItem,
  ({ children, rightEl, isActive, ...props }) => {
    const { isClickable } = useCardListContext();
    const classes = useStyles(styles, props, ['item']);
    const elementProps = useElementProps(props, classes.item);

    return (
      <Card
        direction="row"
        {...elementProps}
        className={classes.item.className}
        data-is-active={isActive}
        data-is-clickable={isClickable}
      >
        <Flex align="center" gap="$3" css={{ flex: 1 }}>
          {children}
        </Flex>
        {rightEl}
      </Card>
    );
  }
);
