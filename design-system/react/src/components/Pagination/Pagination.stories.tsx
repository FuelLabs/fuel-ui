import { Flex } from '../Flex';
import { Stack } from '../Stack';

import type { PaginationProps } from '.';
import { Pagination } from '.';
import { Footer } from './components';
import { usePagination } from './hooks';

export default {
  component: Pagination.Container,
  title: 'UI/Pagination',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Usage = (props: PaginationProps) => {
  const { totalPagesNumber, currentPage, setCurrentPage, totalResults } =
    usePagination({
      currentPage: props.currentPage || 0,
      pageSize: 5,
      totalResults: props.totalResults || 300,
    });

  return (
    <Flex css={{ p: '$10', w: '320px' }}>
      <Pagination.Container
        totalResults={totalResults}
        currentPage={currentPage}
        totalPagesNumber={totalPagesNumber}
        onPageChange={setCurrentPage}
      >
        <Stack></Stack>
        <Footer />
      </Pagination.Container>
    </Flex>
  );
};
