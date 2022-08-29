import type { KeyboardEvent, ReactElement, ReactNode } from "react";
import { Children, cloneElement } from "react";
import { FocusScope, mergeProps, useFocusManager } from "react-aria";

import { createComponent } from "../../utils";

import type { FocusScopeProps } from "./FocusScope";

type GroupChildrenProps = {
  children: ReactNode;
};

const GroupChildren = createComponent<GroupChildrenProps>(({ children }) => {
  const { onKeyDown } = useFocusNavigator();

  if (isRightChildrenType(children)) {
    return (
      <>
        {Children.map(children as ReactElement[], (child: ReactElement, idx) =>
          cloneElement(
            child,
            mergeProps(child?.props || {}, {
              onKeyDown,
              tabIndex: idx === 0 ? 0 : -1,
            })
          )
        )}
      </>
    );
  }

  throw new Error("Children type not accepted");
});

export type FocusArrowNavigatorProps = FocusScopeProps & {
  children: ReactNode;
};

export const FocusArrowNavigator = createComponent<FocusArrowNavigatorProps>(
  ({ children, ...props }) => (
    <FocusScope {...props}>
      <GroupChildren>{children}</GroupChildren>
    </FocusScope>
  )
);

export function useFocusNavigator() {
  const focusManager = useFocusManager();

  const onKeyDown = (e: KeyboardEvent) => {
    // eslint-disable-next-line default-case
    switch (e.key) {
      case "ArrowRight":
        focusManager.focusPrevious({ wrap: true });
        break;
      case "ArrowUp":
        focusManager.focusPrevious({ wrap: true });
        break;
      case "ArrowLeft":
        focusManager.focusNext({ wrap: true });
        break;
      case "ArrowDown":
        focusManager.focusNext({ wrap: true });
        break;
    }
  };

  return {
    onKeyDown,
  };
}

function isRightChildrenType(children: ReactNode) {
  return (
    typeof children !== "boolean" &&
    typeof children !== "string" &&
    typeof children !== "undefined" &&
    typeof children !== "number"
  );
}
