import { cx } from '@fuel-ui/css';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { createComponent, createStyledElement } from '../../utils';

import * as styles from './styles';

export type TabsTriggerProps = TabsPrimitive.TabsTriggerProps;

export const TabsTrigger = createComponent<TabsTriggerProps>(
  ({ children, className, ...props }) => {
    const classes = cx('fuel_tabs--trigger', className);
    return createStyledElement(
      TabsPrimitive.Trigger,
      styles.trigger,
      null,
      { ...props, className: classes },
      children
    );
  }
);
