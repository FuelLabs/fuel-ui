import { cx } from '@fuel-ui/css';
import { mergeRefs } from '@react-aria/utils';
import type { ReactElement } from 'react';
import { Children, cloneElement } from 'react';

import { Button, useDialog } from '..';
import type { ButtonProps } from '..';

import { createComponent } from '~/utils';

type ElementType = 'button';

export type DialogCloseProps = ButtonProps & {
  asChild?: boolean;
};

type ObjProps = {
  id: string;
};

export const DialogClose = createComponent<
  DialogCloseProps,
  ObjProps,
  unknown,
  ElementType
>(({ ref, className, asChild = true, children, ...props }) => {
  const classes = cx('fuel_dialog-close', className);
  const { state, triggerRef } = useDialog();

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
    >
      {children}
    </Button>
  );
});

DialogClose.id = 'DialogClose';
