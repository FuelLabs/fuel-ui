import { cx } from '@fuel-ui/css';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { mergeProps, useFocusRing } from 'react-aria';

import { createComponent, useCreateStyledElement } from '../../utils';

import { useTabsProps } from './Tabs';
import * as styles from './styles';

export type TabsTriggerProps = TabsPrimitive.TabsTriggerProps;

export const TabsTrigger = createComponent<TabsTriggerProps>(
  ({ children, className, ...props }) => {
    const { variant = 'link' } = useTabsProps();
    const { isFocusVisible, focusProps } = useFocusRing({
      isTextInput: false,
      within: true,
      autoFocus: props.autoFocus,
    });

    const classes = cx('fuel_TabsTrigger', className, {
      focused: isFocusVisible,
    });

    return useCreateStyledElement(
      TabsPrimitive.Trigger,
      styles.trigger,
      { variant },
      mergeProps(props, focusProps, { className: classes }),
      children,
    );
  },
);
