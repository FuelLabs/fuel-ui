import type { PaginationProps } from '..';
import { PaginationProvider } from '../context';

import { createComponent } from '~/utils';

export const PaginationContainer = createComponent<PaginationProps, unknown>(
  ({
    totalPagesNumber,
    currentPage,
    isDisabled,
    onPageChange,
    totalResults,
    ...props
  }) => {
    return (
      <PaginationProvider
        totalResults={totalResults}
        currentPage={currentPage}
        isDisabled={isDisabled}
        onPageChange={onPageChange}
        totalPagesNumber={totalPagesNumber}
      >
        {props.children}
      </PaginationProvider>
    );
  }
);
