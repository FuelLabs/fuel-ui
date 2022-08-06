import { cx } from "@fuel-ui/css";
import { createContext, useContext } from "react";

import type { StackProps } from "..";
import { Focus, Stack } from "..";
import type { CreateComponent } from "../../utils";
import { createComponent } from "../../utils";

import { CardListItem } from "./CardListItem";

type Context = {
  isClickable?: boolean;
};

const ctx = createContext<Context>({} as Context);

export function useCardListContext() {
  return useContext(ctx);
}

export type CardListProps = StackProps & {
  isClickable?: boolean;
};

export const CardList = createComponent<CardListProps>(
  ({ children, className, isClickable, ...props }) => {
    const classes = cx("fuel_card-list", className);
    const content = (
      <Stack {...props} className={classes}>
        {children}
      </Stack>
    );
    return (
      <ctx.Provider value={{ isClickable }}>
        {!isClickable ? (
          content
        ) : (
          <Focus.ArrowNavigator asChild autoFocus>
            {content}
          </Focus.ArrowNavigator>
        )}
      </ctx.Provider>
    );
  }
) as CreateComponent<CardListProps> & {
  id: string;
  Item: typeof CardListItem;
};

CardList.Item = CardListItem;
