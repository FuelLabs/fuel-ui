import { useEffect } from 'react';

import { useFirstMountState } from './useFirstMountState';

export const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const isFirstMount = useFirstMountState();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!isFirstMount) {
      return effect();
    }
  }, deps);
};
