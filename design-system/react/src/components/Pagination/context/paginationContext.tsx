import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import {
  useMemo,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';

import type { PaginationProps } from '..';
import { generatePages, validatePageNumber } from '../utils';

export const paginationContextInitialState = {
  currentPage: 1,
  isDisabled: false,
  totalPagesNumber: 0,
  totalResults: 0,
  pages: [],
};

export type PaginationContextValues = Omit<
  typeof paginationContextInitialState,
  'pages'
> & {
  totalResults: number;
  pages: number[];
  handlers: {
    setCurrentPage: Dispatch<SetStateAction<number>>;
    setIsDisabled: Dispatch<SetStateAction<boolean>>;
    changePage: (page: number) => void;
  };
};

export const PaginationContext = createContext<PaginationContextValues>({
  ...paginationContextInitialState,
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
  const [totalPagesNumber, setTotalPagesNumber] = useState<number>(
    paginationContextInitialState.totalPagesNumber
  );

  useEffect(() => {
    if (props.isDisabled !== undefined) {
      setIsDisabled(props.isDisabled);
    }
  }, [props.isDisabled]);

  useEffect(() => {
    setTotalPagesNumber(props.totalPagesNumber);
  }, [props.totalPagesNumber]);

  useEffect(() => {
    if (props.currentPage && !validatePageNumber(props.currentPage)) {
      return;
    }

    if (props.currentPage && props.currentPage !== currentPage) {
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

  const pages = useMemo(
    () =>
      generatePages({
        totalPagesNumber,
        currentPage,
      }),
    [currentPage, totalPagesNumber]
  );

  return (
    <PaginationContext.Provider
      value={{
        totalResults: props.totalResults,
        currentPage,
        pages,
        isDisabled,
        totalPagesNumber,
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
