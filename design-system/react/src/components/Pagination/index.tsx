import { Footer, PaginationContainer } from './components';

export * from './hooks';

export type PaginationProps = {
  totalPagesNumber: number;
  isDisabled?: boolean;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  totalResults: number;
};

export const Pagination = {
  Container: PaginationContainer,
  Footer,
};
