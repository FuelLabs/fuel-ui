import { css, cx } from '@fuel-ui/css';
import type { ReactNode } from 'react';

import type { CardProps } from '..';
import { useCardListContext } from '..';
import { createComponent } from '../../utils';
import { Flex } from '../Box/Flex';
import { Card } from '../Card';

export type CardListProps = CardProps & {
  isActive?: boolean;
  rightEl?: ReactNode;
};

export const CardListItem = createComponent<CardListProps>(
  ({ children, className, rightEl, isActive, ...props }) => {
    const { isClickable } = useCardListContext();
    const classes = cx('fuel_CardListItem', className, styles.root());

    return (
      <Card
        direction="row"
        {...props}
        className={classes}
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

const styles = {
  root: css({
    layer: 'layer-card',
    position: 'relative',
    overflow: 'hidden',
    padding: '$4 !important',
    gap: '$3',
    transitionProperty: 'background-color, border-color',
    transitionDuration: '0.3ms',

    '&[data-is-active="true"]': {
      is: ['borderHighlight'],
    },

    '&[data-is-clickable="true"]': {
      cursor: 'pointer',

      '&:hover, &:focus-within': {
        outline: 'none',
        is: ['borderHighlight'],
      },
    },
  }),
};
