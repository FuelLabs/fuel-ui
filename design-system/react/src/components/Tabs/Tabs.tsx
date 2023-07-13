import { cx } from '@fuel-ui/css';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { createContext, useContext } from 'react';

import { createComponent, useCreateStyledElement } from '../../utils';

import { TabsContent } from './TabsContent';
import { TabsList } from './TabsList';
import { TabsTrigger } from './TabsTrigger';
import * as styles from './styles';

export type TabsVariant = 'subtle' | 'link';
export type TabsProps = TabsPrimitive.TabsProps & {
  variant?: TabsVariant;
};

type Context = {
  variant?: TabsVariant;
};

const ctx = createContext<Context>({ variant: 'link' });
export function useTabsProps() {
  return useContext(ctx);
}

type ObjProps = {
  id: string;
  List: typeof TabsList;
  Trigger: typeof TabsTrigger;
  Content: typeof TabsContent;
};

export const Tabs = createComponent<TabsProps, ObjProps>(
  ({ children, className, variant, ...props }) => {
    const classes = cx('fuel_Tabs', className);
    return useCreateStyledElement(
      TabsPrimitive.Root,
      styles.root,
      null,
      { ...props, className: classes },
      <ctx.Provider value={{ variant }}>{children}</ctx.Provider>,
    );
  },
);

Tabs.id = 'Tabs';
Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;
