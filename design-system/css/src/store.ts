import type { INTERNAL_Snapshot } from 'valtio';
import { useProxy } from 'valtio/utils';
import { proxy, subscribe, snapshot } from 'valtio/vanilla';

import type { ThemeUtilsCSS } from './theme';

type CSSStyle = ThemeUtilsCSS;

type StylesObj = {
  [key: string]: {
    props: unknown;
    styles: string;
  };
};

type StylesStore<T extends StylesObj> = {
  [K in keyof T]: {
    name: K;
    defaultProps: T[K]['props'];
    styles: { [P in T[K]['styles'] as string]: CSSStyle };
  };
};

export function createStyleStore<T extends StylesObj>() {
  const state = proxy({} as StylesStore<T>);

  function susbcribeState(
    cb: (state: INTERNAL_Snapshot<StylesStore<T>>) => void
  ) {
    return subscribe(state, () => {
      cb(snapshot(state));
    });
  }

  function getState() {
    return snapshot(state);
  }

  function useState() {
    return useProxy(state);
  }

  return {
    state,
    subscribe: susbcribeState,
    getState,
    useState,
  };
}
