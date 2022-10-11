import type { ReactNode } from 'react';

export { FocusScope } from 'react-aria';

export type FocusScopeProps = {
  children: ReactNode;
  /**
   * Whether to contain focus inside the scope, so users cannot
   * move focus outside, for example in a modal dialog.
   */
  contain?: boolean;
  /**
   * Whether to restore focus back to the element that was focused
   * when the focus scope mounted, after the focus scope unmounts.
   */
  restoreFocus?: boolean;
  /** Whether to auto focus the first focusable element in the focus scope on mount. */
  autoFocus?: boolean;
};
