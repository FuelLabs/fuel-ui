import { useCallback, useContext, useMemo } from 'react';

import { PaginationContext } from '../context';
import { styles } from '../styles';
import { checkUnderFlow } from '../utils';

import { Button } from '~/components/Button';
import { Flex } from '~/components/Flex';
import { Icon } from '~/components/Icon';
import { IconButton } from '~/components/IconButton';
import { Text } from '~/components/Text';

export const Footer = () => {
  const {
    currentPage,
    isDisabled,
    totalPagesNumber,
    handlers,
    pages,
    totalResults,
  } = useContext(PaginationContext);

  const isLastPage = useMemo(
    () => currentPage > totalPagesNumber - 1,
    [currentPage, totalPagesNumber]
  );
  const isFirstPage = useMemo(() => currentPage === 1, [currentPage]);

  const isPreviousDisabled = useMemo(
    () => isFirstPage || isDisabled,
    [isDisabled, isFirstPage]
  );

  const isNextDisabled = useMemo(
    () => isLastPage || isDisabled,
    [isDisabled, isLastPage]
  );

  const handleNextPage = useCallback(() => {
    if (!isLastPage) {
      handlers.changePage(currentPage + 1);
    }
  }, [handlers.changePage, isLastPage, currentPage]);

  const handlePreviousPage = useCallback(() => {
    if (!isFirstPage) {
      handlers.changePage(currentPage - 1);
    }
  }, [handlers.changePage, isFirstPage, currentPage]);

  const goToPage = useCallback(
    (page: number) => {
      if (page !== currentPage) {
        handlers.changePage(page);
      }
    },
    [currentPage, handlers.changePage]
  );

  return (
    <Flex css={styles.footer}>
      <Flex css={styles.footerResults}>
        <Flex css={styles.footerResults}>
          <Icon icon="ListBullets" />
          <Text fontSize="sm" as="div">
            {totalResults || 0} results
          </Text>
        </Flex>
      </Flex>
      <Flex css={styles.footerNumbers}>
        <IconButton
          icon="CaretLeft"
          aria-label="footer-previous-page"
          disabled={isPreviousDisabled}
          onPress={handlePreviousPage}
          css={styles.footerButton}
        />

        {pages.map((pageNumber, index) => {
          return !checkUnderFlow(pageNumber) ? (
            <Text key={index} css={styles.separator} as="div">
              ...
            </Text>
          ) : (
            <Button
              aria-label={`fuel-pagination-page-${pageNumber}`}
              css={{
                ...styles.footerButton,
                ...styles.pageButtonWrapper,
                ...(currentPage === pageNumber ? styles.activePage : {}),
              }}
              key={index}
              onPress={() => goToPage(pageNumber)}
            >
              {pageNumber}
            </Button>
          );
        })}

        <IconButton
          icon="CaretRight"
          aria-label="footer-next-page"
          disabled={isNextDisabled}
          onPress={handleNextPage}
          css={styles.footerButton}
        />
      </Flex>
    </Flex>
  );
};
