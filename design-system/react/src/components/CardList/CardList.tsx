import { cx } from "@fuel-ui/css";
import { createContext, useContext } from "react";

import type { StackProps } from "..";
import { Focus, Stack } from "..";
import { createComponent } from "../../utils";

import { CardListItem } from "./CardListItem";

type Context = {
  isClickable?: boolean;
  autoFocus?: boolean;
  isFocused?: boolean;
};

const ctx = createContext<Context>({} as Context);

export function useCardListContext() {
  return useContext(ctx);
}

export type CardListProps = StackProps & Omit<Context, "isFocused">;

type ObjProps = {
  id: string;
  Item: typeof CardListItem;
};

export const CardList = createComponent<CardListProps, ObjProps>(
  ({ children, className, isClickable, autoFocus, ...props }) => {
    const classes = cx("fuel_card-list", className);

    return (
      <ctx.Provider value={{ isClickable, autoFocus }}>
        <Stack {...props} className={classes}>
          {isClickable ? (
            <Focus.ArrowNavigator autoFocus={autoFocus}>
              {children}
            </Focus.ArrowNavigator>
          ) : (
            children
          )}
        </Stack>
      </ctx.Provider>
    );
  }
);

CardList.Item = CardListItem;
