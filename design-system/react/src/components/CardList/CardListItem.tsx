import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';
import { Flex } from '../Box/Flex';
import { Card } from '../Card';

import type { CardListItemDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles } from '~/hooks';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const _CardListItem = _unstable_createComponent<CardListItemDef>(
  Components.CardListItem,
  ({ children, rightEl, isActive, ...props }) => {
    const classes = useStyles(styles, props, ['item']);

    return (
      <Card
        {...props}
        className={classes.item.className}
        data-is-active={isActive}
      >
        <Flex align="center" gap="$3" css={{ flex: 1 }}>
          {children}
        </Flex>
        {rightEl}
      </Card>
    );
  }
);

export const CardListItem =
  createPolymorphicComponent<CardListItemDef>(_CardListItem);
