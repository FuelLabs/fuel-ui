import { cx } from '@fuel-ui/css';

import { createComponent } from '../../utils';
import type { StackProps } from '../Box/Stack';
import { Stack } from '../Box/Stack';

import { usePaginationContext } from './Pagination';
import { PaginationItem } from './PaginationItem';

type OmitProps = 'children';
export type PaginationItemsProps = StackProps;

export const PaginationItems = createComponent<
  PaginationItemsProps,
  unknown,
  OmitProps
>(({ className, as, ...props }) => {
  const classes = cx('fuel_PaginationItems', className);
  const pagination = usePaginationContext();
  return (
    <Stack {...props} direction="row" as={as} className={classes}>
      {(pagination.pages || []).map((page) => (
        <PaginationItem key={page} page={page} />
      ))}
    </Stack>
  );
});
