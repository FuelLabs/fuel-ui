import { cx } from '@fuel-ui/css';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import type { ReactElement } from 'react';
import { Children, cloneElement } from 'react';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';
import { _unstable_createComponent } from '~/utils';

import { Icon, IconButton } from '..';

import { useDialog } from './Dialog';
import type { DialogCloseDef } from './defs';
import { styles } from './styles';

export const DialogClose = _unstable_createComponent<DialogCloseDef>(
  Components.DialogClose,
  ({ ref, asChild, children, className, css, ...props }) => {
    const classes = useStyles(styles, props, ['close']);
    const { state, triggerRef } = useDialog();

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
                ...props,
                ref: mergeRefs(ref, triggerRef as never),
                onPress: handleToggle,
                className,
              }),
            );
          })}
        </>
      );
    }

    const elementProps = {
      ...props,
      className: cx(className, classes.close.className),
      color: props.color || 'gray',
      variant: props.variant || 'link',
      icon: Icon.is('X'),
      iconSize: 20,
      'aria-label': props['aria-label'] || 'Close',
      onPress: handleToggle,
      css,
    };

    return <IconButton {...elementProps} />;
  },
);

DialogClose.id = 'DialogClose';
