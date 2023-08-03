import { cx } from '@fuel-ui/css';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { createComponent, useCreateStyledElement } from '../../utils';

import * as styles from './styles';

export type TabsContentProps = TabsPrimitive.TabsContentProps;

export const TabsContent = createComponent<TabsContentProps>(
  ({ children, className, ...props }) => {
    const classes = cx('fuel_TabsContent', className);
    return useCreateStyledElement(
      TabsPrimitive.Content,
      styles.content,
      null,
      { ...props, className: classes },
      children,
    );
  },
);
