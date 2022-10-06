/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Colors } from '@fuel-ui/css';
import { css, cx, styled } from '@fuel-ui/css';
import { createContext, useContext } from 'react';

import { createComponent } from '../../utils';
import type { HTMLProps } from '../../utils';
import type { IconProps } from '../Icon';

import { ListItem } from './ListItem';

// ----------------------------------------------------------------------------
// Context
// ----------------------------------------------------------------------------

export type ListContext = {
  icon?: IconProps['icon'];
  iconColor?: Colors;
  iconSize?: number;
  iconAriaLabel?: string;
};

const ctx = createContext<ListContext>({} as ListContext);

export function useListContext() {
  return useContext(ctx);
}

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------

type BaseProps = HTMLProps['ul'] | HTMLProps['ol'];
export type ListProps = BaseProps &
  ListContext & {
    type?: 'ordered' | 'unordered';
  };

type ObjProps = {
  Item: typeof ListItem;
};

const Root = styled('ul');

export const List = createComponent<ListProps, ObjProps>(
  ({
    type,
    icon,
    iconSize,
    iconColor,
    iconAriaLabel,
    children,
    className,
    ...props
  }) => {
    const classes = cx(
      'fuel_list',
      className,
      styles({
        ...((type ? { type } : { type: false }) as any),
      })
    );
    return (
      <ctx.Provider value={{ icon, iconSize, iconColor, iconAriaLabel }}>
        <Root
          {...props}
          as={type === 'ordered' ? 'ol' : 'ul'}
          className={classes}
        >
          {children}
        </Root>
      </ctx.Provider>
    );
  }
);

List.Item = ListItem;

const styles = css({
  px: '$0',
  py: '$0',
  mx: '$0',
  my: '$0',

  variants: {
    type: {
      unordered: {
        listStyle: 'inside',
      },
      ordered: {
        pl: '$6',
      },
      false: {
        listStyle: 'none',
      },
    },
  },
});
