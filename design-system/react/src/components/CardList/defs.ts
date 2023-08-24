import { createContext, useContext } from 'react';
import type { CreateComponent } from '~/utils';
import type { Components } from '~/utils/components-list';

import type { StackProps } from '../Box';
import type { CardProps } from '../Card/defs';

import type { CardListItem } from './CardListItem';

export type CardListNS = {
  id: string;
  Item: typeof CardListItem;
};

export const CardListContext = createContext<ICardListContext>(
  {} as ICardListContext,
);

export function useCardListContext() {
  return useContext(CardListContext);
}

export type ICardListContext = {
  isClickable?: boolean;
  autoFocus?: boolean;
  isFocused?: boolean;
};

export type CardListProps = StackProps & Omit<ICardListContext, 'isFocused'>;

export type CardListItemProps = CardProps & {
  isActive?: boolean;
  rightEl?: React.ReactNode;
};

export type CardListDef = CreateComponent<{
  type: 'div';
  component: Components.CardList;
  props: CardListProps;
  element: HTMLDivElement;
  styles: 'root' | 'item';
  namespace: CardListNS;
}>;

export type CardListItemDef = CreateComponent<{
  type: 'div';
  component: Components.CardListItem;
  props: CardListItemProps;
  element: HTMLDivElement;
  styles: 'item';
}>;
