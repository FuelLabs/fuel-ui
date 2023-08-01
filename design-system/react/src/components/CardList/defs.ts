import { createContext, useContext } from 'react';
import type { Components } from '~/defs';
import type { CreateComponent, HTMLProps } from '~/utils';

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
  /**
   * @deprecated Use onPress instead. onPress support Enter and Space keyboard.
   * You're able to use just one or another, don't use onClick and onPress together
   */
  onClick?: HTMLProps['button']['onClick'];
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
