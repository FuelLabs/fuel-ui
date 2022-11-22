import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { createContext, useCallback, useEffect, useState } from 'react';

import type { PaginationProps } from '../Pagination';
import { validatePageNumber } from '../utils';

export const paginationContextInitialState = {
  currentPage: 1,
  isDisabled: false,
  pagesCount: 0,
};

export type PaginationContextValues = typeof paginationContextInitialState & {
  handlers: {
    setCurrentPage: Dispatch<SetStateAction<number>>;
    setIsDisabled: Dispatch<SetStateAction<boolean>>;
    changePage: (page: number) => void;
  };
};

export const PaginationContext = createContext<PaginationContextValues>({
  currentPage: paginationContextInitialState.currentPage,
  isDisabled: paginationContextInitialState.isDisabled,
  pagesCount: paginationContextInitialState.pagesCount,
  handlers: {
    changePage: () => null,
    setIsDisabled: () => null,
    setCurrentPage: () => null,
  },
});

export const PaginationProvider = (
  props: PropsWithChildren<PaginationProps>
) => {
  const [currentPage, setCurrentPage] = useState<number>(
    paginationContextInitialState.currentPage
  );
  const [isDisabled, setIsDisabled] = useState<boolean>(
    paginationContextInitialState.isDisabled
  );
  const [pagesCount, setPagesCount] = useState<number>(
    paginationContextInitialState.pagesCount
  );

  useEffect(() => {
    if (props.isDisabled !== undefined) {
      setIsDisabled(props.isDisabled);
    }
  }, [props.isDisabled]);

  useEffect(() => {
    setPagesCount(props.pagesCount);
  }, [props.pagesCount]);

  useEffect(() => {
    if (!validatePageNumber(props.currentPage)) {
      return;
    }

    if (props.currentPage != null && props.currentPage !== currentPage) {
      setCurrentPage(props.currentPage);
    }
  }, [props.currentPage, currentPage]);

  const changePage = useCallback(
    (page: number) => {
      setCurrentPage(page);
      props.onPageChange(page);
    },
    [props.onPageChange]
  );

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        isDisabled,
        pagesCount,
        handlers: {
          changePage,
          setCurrentPage,
          setIsDisabled,
        },
      }}
    >
      {props.children}
    </PaginationContext.Provider>
  );
};
