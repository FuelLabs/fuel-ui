import { cssObj, cx } from '@fuel-ui/css';

import { createComponent } from '../../utils';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';

import { usePaginationContext } from './Pagination';

export type OmitProps = 'children' | 'as' | 'css';

export type PaginationNavProps = {
  direction: 'next' | 'prev';
};

export const PaginationNav = createComponent<
  PaginationNavProps,
  unknown,
  OmitProps
>(({ direction, className, ...props }) => {
  const classes = cx(`fuel_Pagination-${direction}`, className);
  const pagination = usePaginationContext();
  const { currentPage, pagesCount } = pagination;
  const isDisabled =
    direction === 'next' ? currentPage === pagesCount : currentPage === 1;

  return (
    <IconButton
      {...props}
      icon={Icon.is(direction === 'next' ? 'CaretRight' : 'CaretLeft')}
      aria-label={direction === 'next' ? 'Next page' : 'Previous page'}
      className={classes}
      data-variant={pagination.variant}
      variant={pagination.variant}
      size={pagination.size}
      color={pagination.color}
      css={styles.base}
      isDisabled={isDisabled}
      onPress={() => pagination[direction]()}
    />
  );
});

const styles = {
  base: cssObj({
    px: '$1',
    color: '$gray7',
    background: 'transparent !important',
    borderColor: 'transparent !important',

    '&:hover:not([aria-disabled="true"])': {
      color: '$gray10',
    },
    '&[aria-disabled="true"]:focus': {
      outline: 'none',
    },
  }),
};
