import { useInterpret, useSelector } from '@xstate/react';

import type { PaginationMachineState } from './paginationMachine';
import { paginationMachine } from './paginationMachine';

export type UsePaginationOpts = {
  pagesCount: number;
  pagesToDisplay?: number;
  onPageChange?: (page: number) => void;
  initialState?: {
    currentPage?: number;
  };
};

const selectors = {
  context(state: PaginationMachineState) {
    return state.context;
  },
};

/**
 * Hook to used inside the <Pagiation> component to handle paginatioMachie logic.
 * @param pagesCount The total number of pages.
 * @param pagesToDisplay The total number of pages to display.
 * @param onPageChange The callback to call when the page changes.
 * @param initialState The initial state.
 * @returns UsePaginationReturn
 *  - pages: The pages to display.
 *  - currentPage: The current page.
 *  - next: The function to go to the next page.
 *  - prev: The function to go to the previous page.
 *  - goTo: The function to go to a specific page.
 *
 * @example
 * const { pages, currentPage, next, prev, goTo } = usePagination({
 *  pagesCount: 10,
 *  pagesToDisplay: 5,
 *  onPageChange: (page) => console.log(page),
 *    initialState: {
 *      currentPage: 1,
 *    },
 * });
 * @example
 */
export function usePagination(opts: UsePaginationOpts) {
  const service = useInterpret(() =>
    paginationMachine
      .withContext({
        pagesCount: opts.pagesCount,
        pagesToDisplay: opts.pagesToDisplay,
        currentPage: opts.initialState?.currentPage ?? 1,
      })
      .withConfig({
        actions: {
          onPageChange: (ctx) => {
            opts.onPageChange?.(ctx.currentPage);
          },
        },
      })
  );

  const context = useSelector(service, selectors.context);

  function next() {
    service.send({ type: 'NEXT' });
  }
  function prev() {
    service.send({ type: 'PREV' });
  }
  function goTo(page: number) {
    service.send({ type: 'GOTO', input: page });
  }

  return {
    ...context,
    next,
    prev,
    goTo,
  };
}

export type UsePaginationReturn = ReturnType<typeof usePagination>;
