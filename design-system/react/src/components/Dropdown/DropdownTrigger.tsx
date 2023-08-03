import { cx } from '@fuel-ui/css';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import type { ReactElement } from 'react';
import { Children, cloneElement } from 'react';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';
import { _unstable_createComponent } from '~/utils';

import { Icon, Button } from '..';

import { useDropdown } from './Dropdown';
import type { DropdownTriggerDef } from './defs';
import { styles } from './styles';

export const DropdownTrigger = _unstable_createComponent<DropdownTriggerDef>(
  Components.DropdownTrigger,
  ({ ref, className, asChild, children, ...props }) => {
    const classes = useStyles(styles, props, ['trigger']);
    const { state, triggerRef } = useDropdown();
    const rightIcon = state?.isOpen
      ? Icon.is('ChevronUp')
      : Icon.is('ChevronDown');

    function handleToggle() {
      state?.toggle();
    }

    if (asChild) {
      return (
        <>
          {Children.toArray(Children.only(children)).map((child) => {
            return cloneElement(
              child as ReactElement,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              mergeProps((child as any).props, {
                ref: mergeRefs(ref, triggerRef as never),
                onPress: handleToggle,
                className: cx(classes.trigger.className, className),
              }),
            );
          })}
        </>
      );
    }

    return (
      <Button
        {...props}
        ref={mergeRefs(ref, triggerRef as never)}
        rightIcon={rightIcon}
      >
        {children}
      </Button>
    );
  },
);

DropdownTrigger.id = 'DropdownTrigger';
