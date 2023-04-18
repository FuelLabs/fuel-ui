import { cx } from '@fuel-ui/css';
import { mergeRefs } from '@react-aria/utils';
import type { ReactElement } from 'react';
import { Children, cloneElement } from 'react';

import type { ButtonProps } from '..';
import { Icon, Button } from '..';

import { useDropdown } from '.';

import { createComponent } from '~/utils';

type ElementType = 'button';
type DropdownTriggerProps = ButtonProps & {
  asChild?: boolean;
};

type ObjProps = {
  id: string;
};

export const DropdownTrigger = createComponent<
  DropdownTriggerProps,
  ObjProps,
  unknown,
  ElementType
>(({ ref, className, asChild = true, children, ...props }) => {
  const classes = cx('fuel_DropdownTrigger', className);
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
            className: classes,
          });
        })}
      </>
    );
  }

  return (
    <Button
      {...props}
      ref={mergeRefs(ref, triggerRef as never)}
      onPress={handleToggle}
      rightIcon={state?.isOpen ? Icon.is('CaretUp') : Icon.is('CaretDown')}
    >
      {children}
    </Button>
  );
});

DropdownTrigger.id = 'DropdownTrigger';
