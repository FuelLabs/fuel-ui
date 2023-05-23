import { cx } from '@fuel-ui/css';
import { createContext, useContext } from 'react';

import { createComponent } from '../../utils';
import { Box } from '../Box';
import type { StackProps } from '../Box/Stack';
import { Focus } from '../Focus';

import { CardListItem } from './CardListItem';

type Context = {
  isClickable?: boolean;
  autoFocus?: boolean;
  isFocused?: boolean;
};

const ctx = createContext<Context>({} as Context);

export function useCardListContext() {
  return useContext(ctx);
}

export type CardListProps = StackProps & Omit<Context, 'isFocused'>;

type ObjProps = {
  id: string;
  Item: typeof CardListItem;
};

export const CardList = createComponent<CardListProps, ObjProps>(
  ({ children, className, gap = '$2', isClickable, autoFocus, ...props }) => {
    const classes = cx('fuel_CardList', className);

    return (
      <ctx.Provider value={{ isClickable, autoFocus }}>
        <Box.Stack gap={gap} {...props} className={classes}>
          {isClickable ? (
            <Focus.ArrowNavigator autoFocus={autoFocus}>
              {children}
            </Focus.ArrowNavigator>
          ) : (
            children
          )}
        </Box.Stack>
      </ctx.Provider>
    );
  }
);

CardList.Item = CardListItem;
