import { mergeRefs } from '@react-aria/utils';
import { useStyles } from '~/hooks';
import { useAsChild } from '~/hooks/useAsChild';
import { _unstable_createComponent, omit } from '~/utils';
import { Components } from '~/utils/components-list';

import { Icon, Button } from '..';

import { useDropdown } from './Dropdown';
import type { DropdownTriggerDef } from './defs';
import { styles } from './styles';

export const DropdownTrigger = _unstable_createComponent<DropdownTriggerDef>(
  Components.DropdownTrigger,
  ({ ref, ...props }) => {
    const classes = useStyles(styles, props, ['trigger']);
    const { state, triggerRef, menuTriggerProps } = useDropdown();
    const rightIcon = state?.isOpen
      ? Icon.is('ChevronUp')
      : Icon.is('ChevronDown');

    const itemProps = {
      ...omit(['onClick'], props),
      ...menuTriggerProps,
      ...classes.trigger,
      ref: mergeRefs(ref, triggerRef),
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
