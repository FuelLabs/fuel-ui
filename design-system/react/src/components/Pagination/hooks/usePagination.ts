import type { Dispatch, SetStateAction } from 'react';
import { useState, useMemo } from 'react';

import { generatePages } from '../utils';

type InitialState = {
  currentPage: number;
  pageSize?: number;
  isDisabled?: boolean;
};

type Limits = {
  inner: number;
  outer: number;
};

type UsePagination = {
  initialState: InitialState;
  total?: number;
  pagesCount?: number;
  limits?: Limits;
};

export const usePagination = ({
  total,
  initialState,
  pagesCount: pagesCountProp,
  limits,
}: UsePagination): {
  offset: number;
  pages: number[];
  pagesCount: number;
  currentPage: number;
  pageSize: number;
  isDisabled: boolean;
  setPageSize: Dispatch<SetStateAction<number>>;
  setIsDisabled: Dispatch<SetStateAction<boolean>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
} => {
  const [pageSize, setPageSize] = useState<number>(initialState.pageSize ?? 0);
  const [currentPage, setCurrentPage] = useState<number>(
    initialState.currentPage
  );
  const [isDisabled, setIsDisabled] = useState<boolean>(
    initialState.isDisabled ?? false
  );

  const innerLimit = useMemo(() => limits?.inner ?? 0, [limits]);
  const outerLimit = useMemo(() => limits?.outer ?? 0, [limits]);

  const offset = useMemo(() => {
    return !pageSize ? 0 : currentPage * pageSize - pageSize;
  }, [currentPage, pageSize]);

  const pagesCount = useMemo(() => {
    return pagesCountProp || total == null || pageSize == null
      ? 0
      : Math.ceil(total / pageSize);
  }, [total, pageSize, pagesCountProp]);

  const pages = useMemo(
    () =>
      generatePages({
        currentPage,
        innerLimit,
        outerLimit,
        pagesCount,
      }),
    [currentPage, innerLimit, outerLimit, pagesCount]
  );

  return {
    offset,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    isDisabled,
    setIsDisabled,
    pages,
    pagesCount,
  };
};
