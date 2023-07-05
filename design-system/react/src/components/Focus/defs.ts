import type { ReactNode } from 'react';
import { useFocusManager, type FocusScopeProps } from 'react-aria';

import type { Components } from '~/defs';
import type { CreateComponent } from '~/utils';

export type FocusArrowNavigatorProps = FocusScopeProps & {
  children: ReactNode;
};

export type FocusArrowNavigatorDef = CreateComponent<{
  type: 'div';
  component: Components.FocusArrowNavigator;
  element: HTMLDivElement;
  props: FocusArrowNavigatorProps;
}>;

export function useFocusNavigator() {
  const focusManager = useFocusManager();

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      focusManager.focusNext();
    }
    if (e.key === 'ArrowLeft') {
      focusManager.focusPrevious();
    }
    if (e.key === 'ArrowUp') {
      focusManager.focusNext();
    }
    if (e.key === 'ArrowDown') {
      focusManager.focusPrevious();
    }
  };

  return {
    onKeyDown,
  };
}
