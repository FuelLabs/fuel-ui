import { useCallback, useContext, useMemo } from 'react';

import { PaginationContext } from '../context';
import { styles } from '../styles';

import { Flex } from '~/components/Flex';
import { Icon } from '~/components/Icon';
import { IconButton } from '~/components/IconButton';
import { Text } from '~/components/Text';

export const Footer = () => {
  const { currentPage, isDisabled, pagesCount, handlers } =
    useContext(PaginationContext);

  const isLastPage = useMemo(
    () => currentPage > pagesCount - 1,
    [currentPage, pagesCount]
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
  }, [handlers.changePage, isLastPage]);

  const handlePreviousPage = useCallback(() => {
    if (!isFirstPage) {
      handlers.changePage(currentPage + 1);
    }
  }, [handlers.changePage, isFirstPage]);

  return (
    <Flex css={styles.footer}>
      <Flex css={styles.footerResults}>
        <Flex css={styles.footerResults}>
          <Icon icon="ListBullets" />
          <Text fontSize="sm" as="div">
            {pagesCount}
          </Text>
        </Flex>
      </Flex>
      <Flex css={styles.footerNumbers}>
        <IconButton
          icon="CaretLeft"
          aria-label="footer-previous"
          disabled={isPreviousDisabled}
          onPress={handlePreviousPage}
          css={styles.footerButton}
        />
        <IconButton
          icon="CaretRight"
          aria-label="footer-previous"
          disabled={isNextDisabled}
          onPress={handleNextPage}
          css={styles.footerButton}
        />
      </Flex>
    </Flex>
  );
};
