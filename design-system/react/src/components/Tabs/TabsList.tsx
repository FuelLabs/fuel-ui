import { cx } from '@fuel-ui/css';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { createComponent, createStyledElement } from '../../utils';

import * as styles from './styles';

export type TabsListProps = TabsPrimitive.TabsListProps;

export const TabsList = createComponent<TabsListProps>(
  ({ children, className, ...props }) => {
    const classes = cx('fuel_TabsList', className);
    return createStyledElement(
      TabsPrimitive.List,
      styles.list,
      null,
      { ...props, className: classes },
      children
    );
  }
);
