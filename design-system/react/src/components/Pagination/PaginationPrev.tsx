import { createComponent } from '../../utils';

import type { OmitProps, PaginationNavProps } from './PaginationNav';
import { PaginationNav } from './PaginationNav';

export const PaginationPrev = createComponent<
  Omit<PaginationNavProps, 'direction'>,
  unknown,
  OmitProps
>((props) => {
  return <PaginationNav {...props} direction="prev" />;
});
