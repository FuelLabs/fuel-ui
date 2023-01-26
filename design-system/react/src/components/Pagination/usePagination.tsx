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
