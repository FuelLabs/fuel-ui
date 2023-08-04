import { cx } from '@fuel-ui/css';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import type { ReactElement } from 'react';
import { Children, cloneElement } from 'react';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';
import { _unstable_createComponent, omit } from '~/utils';

import { Icon, Button } from '..';

import { useDropdown } from './Dropdown';
import type { DropdownTriggerDef } from './defs';
import { styles } from './styles';

export const DropdownTrigger = _unstable_createComponent<DropdownTriggerDef>(
  Components.DropdownTrigger,
  ({ ref, className, asChild, children, ...props }) => {
    const classes = useStyles(styles, props, ['trigger']);
    const { state, triggerRef, menuTriggerProps } = useDropdown();
    const rightIcon = state?.isOpen
      ? Icon.is('ChevronUp')
      : Icon.is('ChevronDown');

    const itemProps = {
      ...props,
      ...omit(['onPressStart'], menuTriggerProps),
      ref: mergeRefs(ref, triggerRef),
      className: cx(classes.trigger.className, className),
    };

    if (asChild) {
      return (
        <>
          {Children.toArray(Children.only(children)).map((child) => {
            return cloneElement(
              child as ReactElement,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              mergeProps((child as any).props ?? {}, itemProps),
            );
          })}
        </>
      );
    }

    return (
      <Button {...itemProps} rightIcon={rightIcon}>
        {children}
      </Button>
    );
  },
);

DropdownTrigger.id = 'DropdownTrigger';
