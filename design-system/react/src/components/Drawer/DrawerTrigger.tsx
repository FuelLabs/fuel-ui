import type { ReactElement } from 'react';
import { Children, cloneElement, createElement } from 'react';

import { Button } from '..';

import { useDrawer } from './Drawer';
import type { DrawerTriggerDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles } from '~/hooks';
import { _unstable_createComponent } from '~/utils';

export const DrawerTrigger = _unstable_createComponent<DrawerTriggerDef>(
  Components.DrawerTrigger,
  ({ asChild = true, children, ...props }) => {
    const classes = useStyles(styles, props, ['trigger']);
    const { state } = useDrawer();

    function handleToggle() {
      state?.toggle();
    }

    if (asChild) {
      return (
        <>
          {Children.toArray(Children.only(children)).map((child) => {
            return cloneElement(child as ReactElement, {
              onPress: handleToggle,
              className: classes.trigger.className,
            });
          })}
        </>
      );
    }

    return createElement(Button, { ...props, onPress: handleToggle }, children);
  }
);
