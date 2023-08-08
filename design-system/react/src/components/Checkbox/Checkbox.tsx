import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';
import { useFormControlProps } from '../Form/FormControl';
import { Icon } from '../Icon';

import type { CheckboxDef } from './defs';
import { styles } from './styles';

export const Checkbox = _unstable_createComponent<CheckboxDef>(
  Components.Checkbox,
  ({ isDisabled, isReadOnly, ...props }) => {
    const formControlProps = useFormControlProps();
    const disabled =
      isDisabled ||
      isReadOnly ||
      formControlProps.isDisabled ||
      formControlProps.isReadOnly;

    const readonly = isReadOnly || formControlProps.isReadOnly;
    const classes = useStyles(styles, props);
    const indicatorClass = classes.indicator.className;
    const customProps = {
      ...props,
      ...classes.root,
      disabled,
      'aria-disabled': disabled,
      'aria-readonly': readonly,
      required: props.required || formControlProps.isRequired,
    };

    return _unstable_createEl(
      CheckboxPrimitive.Root,
      customProps,
      <CheckboxPrimitive.CheckboxIndicator className={indicatorClass}>
        <Icon icon="Check" />
      </CheckboxPrimitive.CheckboxIndicator>,
    );
  },
);
