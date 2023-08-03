import { cx } from '@fuel-ui/css';
import { mergeRefs } from '@react-aria/utils';
import type { ReactElement } from 'react';
import { Children, cloneElement, createElement } from 'react';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';
import { _unstable_createComponent } from '~/utils';

import { Icon, Button } from '..';

import { useDropdown } from './Dropdown';
import type { DropdownTriggerDef } from './defs';
import { styles } from './styles';

export const DropdownTrigger = _unstable_createComponent<DropdownTriggerDef>(
  Components.DropdownTrigger,
  ({ ref, className, asChild = true, children, ...props }) => {
    const classes = useStyles(styles, props, ['trigger']);
    const { state, triggerRef } = useDropdown();

    function handleToggle() {
      state?.toggle();
    }

    if (asChild) {
      return (
        <>
          {Children.toArray(Children.only(children)).map((child) => {
            return cloneElement(child as ReactElement, {
              ref: mergeRefs(ref, triggerRef as never),
              onPress: handleToggle,
              className: cx(classes.trigger.className, className),
            });
          })}
        </>
      );
    }

    return createElement(
      Button,
      {
        ...props,
        ref: mergeRefs(ref, triggerRef as never),
        onPress: handleToggle,
        rightIcon: state?.isOpen
          ? Icon.is('ChevronUp')
          : Icon.is('ChevronDown'),
      },
      children,
    );
  },
);

DropdownTrigger.id = 'DropdownTrigger';
