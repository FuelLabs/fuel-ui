import { cx } from '@fuel-ui/css';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { createComponent, createStyledElement } from '../../utils';

import { useTabsProps } from './Tabs';
import * as styles from './styles';

export type TabsTriggerProps = TabsPrimitive.TabsTriggerProps;

export const TabsTrigger = createComponent<TabsTriggerProps>(
  ({ children, className, ...props }) => {
    const classes = cx('fuel_TabsTrigger', className);
    const { variant = 'link' } = useTabsProps();
    return createStyledElement(
      TabsPrimitive.Trigger,
      styles.trigger,
      { variant },
      { ...props, className: classes },
      children
    );
  }
);
