/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ThemeUtilsCSS } from '@fuel-ui/css';
import { cx } from '@fuel-ui/css';
import { mergeRefs } from '@react-aria/utils';
import type { FC, Key } from 'react';
import { useRef } from 'react';
import type { AriaMenuOptions } from 'react-aria';
import { mergeProps, useMenu } from 'react-aria';
import type { ItemProps, TreeProps } from 'react-stately';
import { Item, useTreeState } from 'react-stately';

import type { HTMLProps } from '../../utils';
import { createComponent } from '../../utils';
import { omit } from '../../utils/helpers';
import { Box } from '../Box';

import type { MenuItemProps as BaseMenuItemProps } from './MenuItem';
import { MenuItem } from './MenuItem';
import * as styles from './styles';

export type MenuProps = HTMLProps['ul'] &
  TreeProps<any> &
  AriaMenuOptions<unknown> & {
    onAction?: (key: Key) => void;
    autoFocus?: boolean;
    autoFocusKey?: string;
  };

export type MenuItemProps = ItemProps<BaseMenuItemProps> & {
  css?: ThemeUtilsCSS;
  className?: string;
};
type ObjProps = {
  Item: FC<MenuItemProps>;
};

export const Menu = createComponent<MenuProps, ObjProps>(
  ({
    ref,
    autoFocus,
    autoFocusKey,
    className,
    onAction,
    selectionMode = 'none',
    ...props
  }) => {
    const innerRef = useRef<HTMLUListElement | null>(null);
    const state = useTreeState<any>({ ...props, selectionMode });
    const { menuProps } = useMenu(props, state, innerRef);
    const classes = cx('fuel_Menu', className, styles.menu());
    const customProps = {
      ...omit(['disabledKeys'], props),
      ref: mergeRefs(innerRef, ref),
      className: classes,
    };

    const children = [...state.collection].map((item, idx) => (
      <MenuItem
        {...(autoFocus && {
          autoFocus: autoFocusKey ? autoFocusKey === item.key : idx === 0,
        })}
        css={item.props.css}
        className={item.props.className}
        key={item.key}
        item={item}
        state={state}
        onAction={onAction}
      />
    ));

    return (
      <Box as="ul" {...mergeProps(menuProps, customProps)}>
        {children}
      </Box>
    );
  }
);

Menu.Item = Item;
