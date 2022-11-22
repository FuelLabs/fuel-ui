import { PaginationProvider } from './context';

import { createComponent } from '~/utils';

export type PaginationProps = {
  pagesCount: number;
  isDisabled?: boolean;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination = createComponent<PaginationProps, unknown, 'css'>(
  ({ pagesCount, currentPage, isDisabled, onPageChange, ...props }) => {
    return (
      <PaginationProvider
        currentPage={currentPage}
        isDisabled={isDisabled}
        onPageChange={onPageChange}
        pagesCount={pagesCount}
      >
        {props.children}
      </PaginationProvider>
    );
  }
);
