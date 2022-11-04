import type { ThemeUtilsCSS } from '@fuel-ui/css';
import { cx } from '@fuel-ui/css';
import { mergeRefs } from '@react-aria/utils';
import type { Node } from '@react-types/shared';
import type { Key, ReactNode } from 'react';
import { useRef } from 'react';
import { mergeProps, useMenuItem, useButton } from 'react-aria';
import type { TreeState } from 'react-stately';

import type { HTMLProps } from '../../utils';
import { createStyledElement, createComponent } from '../../utils';
import type { ButtonProps } from '../Button';

import * as styles from './styles';

export type MenuItemProps = HTMLProps['li'] & {
  item: Node<ReactNode>;
  state: TreeState<ReactNode>;
  onAction?: (key: Key) => void;
  onPress?: ButtonProps['onPress'];
  css?: ThemeUtilsCSS;
  className?: string;
  autoFocus?: boolean;
};

export const MenuItem = createComponent<MenuItemProps>(
  ({ item, state, onAction, className, autoFocus, ...props }) => {
    const ref = useRef<HTMLLIElement | null>(null);
    const isDisabled = state.disabledKeys.has(item.key);
    const isFocused = state.selectionManager.focusedKey === item.key;

    const { buttonProps } = useButton(
      { isDisabled, onPress: item.props.onPress, autoFocus },
      ref
    );

    const { menuItemProps } = useMenuItem(
      { isDisabled, onAction, key: item.key, closeOnSelect: true },
      state,
      ref
    );

    const classes = cx('fuel_menu-list-item', className);
    const customProps = {
      ...props,
      ref: mergeRefs(ref, props.ref!),
      className: classes,
      'data-focused': isFocused,
      'aria-label': item.props['aria-label'],
    };

    return createStyledElement(
      'li',
      styles.item,
      null,
      mergeProps(customProps, buttonProps, menuItemProps),
      item.rendered
    );
  }
);
