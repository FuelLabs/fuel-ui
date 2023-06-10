import { cx } from '@fuel-ui/css';
import { mergeRefs } from '@react-aria/utils';
import type { ReactElement } from 'react';
import { Children, cloneElement, createElement } from 'react';

import { Icon, IconButton } from '..';

import { useDialog, type DialogCloseDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles } from '~/hooks';
import { _unstable_createComponent } from '~/utils';

export const DialogClose = _unstable_createComponent<DialogCloseDef>(
  Components.DialogClose,
  ({ ref, asChild, children, className, ...props }) => {
    const classes = useStyles(styles, {}, ['close']);
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
              className: cx(className, classes.close.className),
            });
          })}
        </>
      );
    }

    const elementProps = {
      ...props,
      className: classes.close.className,
      color: props.color || 'gray',
      variant: props.variant || 'link',
      icon: Icon.is('X'),
      iconSize: 20,
      'aria-label': props['aria-label'] || 'Close',
      onPress: handleToggle,
    };

    return createElement(IconButton, elementProps);
  }
);

DialogClose.id = 'DialogClose';
