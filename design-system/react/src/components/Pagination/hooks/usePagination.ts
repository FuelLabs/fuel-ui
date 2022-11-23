import { useState, useMemo } from 'react';

import { generatePages } from '../utils';

type UsePaginationConfig = {
  totalResults: number;
  pageSize: number;
  currentPage?: number;
  totalPagesNumber?: number;
  isDisabled?: boolean;
};

export const usePagination = ({
  totalResults,
  totalPagesNumber: totalPagesNumberProp,
  ...config
}: UsePaginationConfig) => {
  const [pageSize, setPageSize] = useState<number>(config.pageSize ?? 0);
  const [currentPage, setCurrentPage] = useState<number>(
    config.currentPage && config.currentPage > 0 ? config.currentPage : 1
  );
  const [isDisabled, setIsDisabled] = useState<boolean>(
    config.isDisabled ?? false
  );

  const offset = useMemo(() => {
    return !pageSize ? 0 : currentPage * pageSize - pageSize;
  }, [currentPage, pageSize]);

  const totalPagesNumber = useMemo(() => {
    return (
      totalPagesNumberProp ||
      (totalResults && pageSize ? Math.ceil(totalResults / pageSize) : 0)
    );
  }, [totalResults, pageSize, totalPagesNumberProp]);

  const pages = useMemo(
    () =>
      generatePages({
        currentPage,
        totalPagesNumber,
      }),
    [currentPage, totalPagesNumber]
  );

  return {
    totalResults,
    offset,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    isDisabled,
    setIsDisabled,
    pages,
    totalPagesNumber,
  };
};
