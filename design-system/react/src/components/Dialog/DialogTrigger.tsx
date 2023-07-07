import { cx } from '@fuel-ui/css';
import { mergeRefs } from '@react-aria/utils';
import { Children, cloneElement, createElement } from 'react';
import type { ReactElement } from 'react';

import { Button } from '../Button';

import { useDialog } from './Dialog';
import type { DialogTriggerDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles } from '~/hooks';
import { _unstable_createComponent } from '~/utils';

export const DialogTrigger = _unstable_createComponent<DialogTriggerDef>(
  Components.DialogTrigger,
  ({ ref, className, asChild = true, children, ...props }) => {
    const classes = useStyles(styles, {}, ['trigger']);
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
              className: cx(className, classes.trigger.className),
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
      },
      children
    );
  }
);

DialogTrigger.id = 'DialogTrigger';
