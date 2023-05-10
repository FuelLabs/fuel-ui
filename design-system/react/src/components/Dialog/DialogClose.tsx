import { css, cx } from '@fuel-ui/css';
import { mergeRefs } from '@react-aria/utils';
import type { ReactElement } from 'react';
import { Children, cloneElement } from 'react';

import { Icon, IconButton, useDialog } from '..';
import type { ButtonProps, IconButtonProps } from '..';

import * as styles from './styles';

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
>(({ ref, className, asChild, children, ...props }) => {
  const classes = cx('fuel_DialogClose', className);
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
    <IconButton
      {...(props as IconButtonProps)}
      css={{ ...styles.close, ...css }}
      className={classes}
      icon={Icon.is('SquareRoundedX')}
      iconSize={22}
      aria-label={props['aria-label'] || 'Close'}
      variant={props.variant || 'link'}
      color={props.color || 'gray'}
      onPress={handleToggle}
    />
  );
});

DialogClose.id = 'DialogClose';
