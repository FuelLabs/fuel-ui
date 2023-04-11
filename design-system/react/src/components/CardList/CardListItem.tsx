import { css, cx } from '@fuel-ui/css';
import type { ReactNode } from 'react';

import type { CardProps } from '..';
import { useCardListContext, Flex, Card } from '..';
import { createComponent } from '../../utils';

export type CardListProps = CardProps & {
  isActive?: boolean;
  rightEl?: ReactNode;
};

export const CardListItem = createComponent<CardListProps>(
  ({ children, className, rightEl, isActive, ...props }) => {
    const { isClickable } = useCardListContext();
    const classes = cx(
      'fuel_CardListItem',
      className,
      styles.root({ isActive, isClickable })
    );

    return (
      <Card direction={'row'} {...props} className={classes}>
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
    is: ['cardLayer'],
    position: 'relative',
    overflow: 'hidden',
    py: '$3',
    px: '$4',
    gap: '$3',

    variants: {
      isActive: {
        true: {
          '&::after': {
            position: 'absolute',
            display: 'block',
            content: '""',
            top: 0,
            left: 0,
            width: '3px',
            height: '100%',
            background: '$accent11',
          },
        },
      },
      isClickable: {
        true: {
          '&:hover, &:focus-within': {
            outline: 'none',
            borderColor: '$borderHover',
          },
        },
      },
    },

    defaultVariants: {
      isActive: false,
      isClickable: false,
    },
  }),
};
