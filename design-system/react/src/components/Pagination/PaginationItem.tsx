import { cssObj, cx } from '@fuel-ui/css';

import { createComponent } from '../../utils';
import { Button } from '../Button';

import { usePaginationContext } from './Pagination';

type OmitProps = 'children' | 'as' | 'css';
export type PaginationItemProps = {
  page: number;
};

export const PaginationItem = createComponent<
  PaginationItemProps,
  unknown,
  OmitProps
>(({ className, page }) => {
  const classes = cx('fuel_PaginationItem', className);
  const pagination = usePaginationContext();
  const autoFocus = page === 1 && pagination.autoFocus;
  const isSelected = pagination.currentPage === page;
  const isDisabled = page < 0;
  return (
    <Button
      aria-label={`Page ${page}`}
      autoFocus={autoFocus}
      className={classes}
      data-selected={isSelected}
      data-variant={pagination.variant}
      variant={pagination.variant}
      size={pagination.size}
      color={pagination.color}
      css={styles.base}
      isDisabled={isDisabled}
      onClick={() => pagination.goTo(page)}
      {...(isDisabled && { tabIndex: -1 })}
    >
      {page < 0 ? '...' : page}
    </Button>
  );
});

const styles = {
  base: cssObj({
    is: ['display'],
    '&:not([data-selected="true"])': {
      color: '$intentsBase10',
    },
    '&[data-variant="solid"]:not([data-selected="true"])': {
      background: '$intentsBase3',
    },
    '&[data-variant="outlined"]:not([data-selected="true"])': {
      borderColor: '$border',
      '&:hover': {
        borderColor: '$borderHover',
      },
    },
    '&[data-variant="ghost"]:not([data-selected="true"])': {
      background: '$intentsBase3',
    },
    '&[aria-disabled="true"]': {
      background: 'transparent !important',
      borderColor: 'transparent !important',
    },
    '&[aria-disabled="true"]:focus': {
      outline: 'none',
    },
  }),
};
