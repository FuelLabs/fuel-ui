import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { createElement } from 'react';

import { _unstable_createComponent } from '../../utils';
import { useFormControlProps } from '../Form/FormControl';
import { Icon } from '../Icon';

import type { CheckboxDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

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
    const elementProps = useElementProps(props, classes.root);

    const customProps = {
      ...elementProps,
      disabled,
      'aria-disabled': disabled,
      'aria-readonly': readonly,
      required: props.required || formControlProps.isRequired,
    };

    return createElement(
      CheckboxPrimitive.Root,
      customProps,
      <CheckboxPrimitive.CheckboxIndicator className={indicatorClass}>
        <Icon icon="Check" />
      </CheckboxPrimitive.CheckboxIndicator>
    );
  }
);
