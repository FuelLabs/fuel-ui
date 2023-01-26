import { cx } from '@fuel-ui/css';
import { createContext, useContext } from 'react';

import { createComponent } from '../../utils';
import type { ButtonProps } from '../Button';
import { Focus } from '../Focus';
import type { StackProps } from '../Stack';
import { Stack } from '../Stack';

import { PaginationItems } from './PaginationItems';
import { PaginationNext } from './PaginationNext';
import { PaginationPrev } from './PaginationPrev';
import type { UsePaginationOpts, UsePaginationReturn } from './usePagination';
import { usePagination } from './usePagination';

// ----------------------------------------------------------------------------
// Context
// ----------------------------------------------------------------------------

type Context = UsePaginationReturn & PaginationBaseProps;
const ctx = createContext({} as Context);
export function usePaginationContext() {
  return useContext(ctx);
}

// ----------------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------------

export type PaginationBaseProps = UsePaginationOpts & {
  autoFocus?: boolean;
  variant?: ButtonProps['variant'];
  color?: ButtonProps['color'];
  size?: ButtonProps['size'];
};

export type PaginationProps = StackProps & PaginationBaseProps;
type ObjProps = {
  Items: typeof PaginationItems;
  Next: typeof PaginationNext;
  Prev: typeof PaginationPrev;
};

/**
 * Pagination component.
 * @param autoFocus Whether to focus on the first item.
 * @param variant The variant of pagination (same as Button).
 * @param color The color of pagination (same as Button).
 * @param size The size of pagination (same as Button).
 * @example
 * <Pagination pagesCount={10}>
 *   <Pagination.Prev />
 *   <Pagination.Items />
 *   <Pagination.Next />
 * </Pagination>
 */
export const Pagination = createComponent<PaginationProps, ObjProps>(
  ({
    children,
    className,
    as,
    variant = 'outlined',
    color,
    size = 'sm',
    pagesCount,
    pagesToDisplay = 6,
    onPageChange,
    initialState,
    autoFocus,
    ...props
  }) => {
    const classes = cx('fuel_pagination', className);
    const pagination = usePagination({
      pagesCount,
      pagesToDisplay,
      onPageChange,
      initialState,
    });
    return (
      <ctx.Provider value={{ ...pagination, variant, color, size, autoFocus }}>
        <Focus.ArrowNavigator restoreFocus>
          <Stack {...props} direction="row" as={as} className={classes}>
            {children}
          </Stack>
        </Focus.ArrowNavigator>
      </ctx.Provider>
    );
  }
);

Pagination.Items = PaginationItems;
Pagination.Next = PaginationNext;
Pagination.Prev = PaginationPrev;
