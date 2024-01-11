import type { ThemeUtilsCSS } from '@fuel-ui/css';
import { cx } from '@fuel-ui/css';
import { mergeRefs } from '@react-aria/utils';
import type { Node } from '@react-types/shared';
import type { Key, ReactNode } from 'react';
import { useRef } from 'react';
import { mergeProps, useMenuItem } from 'react-aria';
import type { TreeState } from 'react-stately';
import { useOnClick } from '~/hooks/useOnClick';

import type { HTMLProps } from '../../utils';
import { createComponent, useCreateStyledElement } from '../../utils';
import type { ButtonProps } from '../Button';

import * as styles from './styles';

export type MenuItemProps = HTMLProps['li'] & {
  item: Node<ReactNode>;
  state: TreeState<ReactNode>;
  onAction?: (key: Key) => void;
  onClick?: ButtonProps['onClick'];
  css?: ThemeUtilsCSS;
  className?: string;
  autoFocus?: boolean;
};

export const MenuItem = createComponent<MenuItemProps>(
  ({ item, state, onAction, className, autoFocus, ...props }) => {
    const ref = useRef<HTMLLIElement | null>(null);
    const isDisabled = state.disabledKeys.has(item.key);
    const isFocused = state.selectionManager.focusedKey === item.key;

    const { buttonProps } = useOnClick(ref, {
      isDisabled,
      onClick: item.props.onClick,
      autoFocus,
    });

    const { menuItemProps } = useMenuItem(
      { isDisabled, onAction, key: item.key, closeOnSelect: true },
      state,
      ref,
    );

    const classes = cx('fuel_MenuListItem', className);
    const customProps = {
      ...props,
      ref: mergeRefs(ref, props.ref!),
      className: classes,
      'data-focused': isFocused,
      'aria-disabled': isDisabled,
      'aria-label': item.props['aria-label'],
    };

    return useCreateStyledElement(
      'li',
      styles.item,
      null,
      mergeProps(customProps, buttonProps, menuItemProps),
      item.rendered,
    );
  },
);
