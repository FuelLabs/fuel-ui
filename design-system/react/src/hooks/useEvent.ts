import { useRef, useCallback, useLayoutEffect, useEffect } from 'react';

/**
 * It's `true` if it is running in a browser environment or `false` if it is not
 * (SSR).
 * @example
 * const title = canUseDOM ? document.title : "";
 */
export const canUseDOM = checkIsBrowser();

// Check if we can use the DOM. Useful for SSR purposes
function checkIsBrowser() {
  return typeof window !== 'undefined' && !!window.document?.createElement;
}

/**
 * `React.useLayoutEffect` that fallbacks to `React.useEffect` on server side.
 */
export const useSafeLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

/**
 * Any function.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = (...args: any) => any;

/**
 * Creates a stable callback function that has access to the latest state and
 * can be used within event handlers and effect callbacks. Throws when used in
 * the render phase.
 * @example
 * function Component(props) {
 *   const onClick = useEvent(props.onClick);
 *   React.useEffect(() => {}, [onClick]);
 * }
 */
export function useEvent<T extends AnyFunction>(callback?: T) {
  const ref = useRef<AnyFunction | undefined>(() => {
    throw new Error('Cannot call an event handler while rendering.');
  });
  useSafeLayoutEffect(() => {
    ref.current = callback;
  });
  return useCallback<AnyFunction>((...args) => ref.current?.(...args), []) as T;
}
