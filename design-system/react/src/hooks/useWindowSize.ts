import { useEffect } from 'react';
import { isBrowser, off, on } from '~/utils/misc';

import { useRafState } from './useRafState';

export const useWindowSize = (
  initialWidth = Infinity,
  initialHeight = Infinity,
) => {
  const [state, setState] = useRafState<{ width: number; height: number }>({
    width: isBrowser ? window.innerWidth : initialWidth,
    height: isBrowser ? window.innerHeight : initialHeight,
  });

  useEffect((): (() => void) | void => {
    if (isBrowser) {
      const handler = () => {
        setState({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      on(window, 'resize', handler);
      return () => {
        off(window, 'resize', handler);
      };
    }
  }, []);

  return state;
};
