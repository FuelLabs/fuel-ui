import { useContext } from 'react';

import { PaginationContext } from '../context';

export const usePaginationContext = () => {
  return useContext(PaginationContext);
};
