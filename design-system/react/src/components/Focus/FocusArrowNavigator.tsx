import type { ReactElement, ReactNode } from 'react';
import { Children, cloneElement } from 'react';
import { FocusScope, mergeProps } from 'react-aria';

import { _unstable_createComponent, createComponent } from '../../utils';

import type { FocusArrowNavigatorDef } from './defs';
import { useFocusNavigator } from './defs';

import { Components } from '~/defs';

type GroupChildrenProps = {
  children: ReactNode;
};

const GroupChildren = createComponent<GroupChildrenProps>(({ children }) => {
  const { onKeyDown } = useFocusNavigator();

  if (isRightChildrenType(children)) {
    return (
      <>
        {Children.map(children as ReactElement[], (child: ReactElement) => {
          return cloneElement(child, mergeProps(child.props, { onKeyDown }));
        })}
      </>
    );
  }

  throw new Error('Children type not accepted');
});

export const FocusArrowNavigator =
  _unstable_createComponent<FocusArrowNavigatorDef>(
    Components.FocusArrowNavigator,
    ({ children, ...props }) => (
      <FocusScope {...props}>
        <GroupChildren>{children}</GroupChildren>
      </FocusScope>
    )
  );

function isRightChildrenType(children: ReactNode) {
  return (
    typeof children !== 'boolean' &&
    typeof children !== 'string' &&
    typeof children !== 'undefined' &&
    typeof children !== 'number'
  );
}
