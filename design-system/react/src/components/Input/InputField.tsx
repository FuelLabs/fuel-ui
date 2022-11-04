import { cx } from '@fuel-ui/css';
import { mergeRefs } from '@react-aria/utils';
import { useRef } from 'react';
import { mergeProps, useFocusable } from 'react-aria';

import { createComponent, createStyledElement } from '../../utils';
import type { HTMLProps } from '../../utils';

import { useInputProps } from './Input';
import * as styles from './styles';

type HTMLInputProps = HTMLProps['input'];
type OmitProps = 'as' | 'children';
export type InputFieldProps = Omit<HTMLInputProps, 'size'> & {
  htmlSize?: HTMLInputProps['size'];
};

type ObjProps = {
  id: string;
};

export const InputField = createComponent<InputFieldProps, ObjProps, OmitProps>(
  ({ name: nameProp, htmlSize, role = 'textbox', className, ...props }) => {
    const parentProps = useInputProps();
    const isRequired = parentProps?.isRequired;
    const isDisabled = parentProps?.isDisabled;
    const isReadOnly = parentProps?.isReadOnly;
    const isInvalid = parentProps?.isInvalid;
    const describedBy = parentProps?.describedBy;

    const name = `${nameProp}`;
    const disabled = isDisabled || isReadOnly;
    const classes = cx('fuel_input--field', className);

    const inputProps = {
      ...props,
      children: null,
      name,
      disabled,
      role,
      size: htmlSize,
      required: isRequired,
      'aria-describedby': describedBy,
      'aria-required': isRequired,
      'aria-invalid': isInvalid,
      'aria-disabled': isDisabled,
      'aria-readonly': isReadOnly,
      'aria-placeholder': props.placeholder,
    };

    const ref = useRef<HTMLInputElement | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { focusableProps } = useFocusable(props as any, ref);
    const customProps = mergeProps(inputProps, focusableProps);

    return createStyledElement('input', styles.field, null, {
      ...customProps,
      className: classes,
      ref: mergeRefs(ref, props.ref!),
    });
  }
);

InputField.id = 'InputField';
