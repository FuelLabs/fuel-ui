import { cx } from '@fuel-ui/css';
import { mergeRefs } from '@react-aria/utils';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';
import { useAsChild } from '~/hooks/useAsChild';
import { _unstable_createComponent, omit } from '~/utils';

import { Icon, Button } from '..';

import { useDropdown } from './Dropdown';
import type { DropdownTriggerDef } from './defs';
import { styles } from './styles';

export const DropdownTrigger = _unstable_createComponent<DropdownTriggerDef>(
  Components.DropdownTrigger,
  ({ ref, className, ...props }) => {
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

    return useAsChild(
      itemProps,
      <Button {...itemProps} rightIcon={rightIcon}>
        {props.children}
      </Button>,
    );
  },
);

DropdownTrigger.id = 'DropdownTrigger';
