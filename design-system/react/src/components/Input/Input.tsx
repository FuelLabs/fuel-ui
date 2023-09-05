import { cx } from '@fuel-ui/css';
import { createContext, useContext } from 'react';
import { mergeProps, useFocusRing } from 'react-aria';

import { createComponent, useCreateStyledElement } from '../../utils';
import { useFormControlProps } from '../Form/FormControl';

import { InputAddonLeft, InputAddonRight } from './InputAddon';
import { InputElementLeft, InputElementRight } from './InputElement';
import { InputField } from './InputField';
import { InputNumber } from './InputNumber';
import * as styles from './styles';

export type InputSizes = 'sm' | 'md' | 'lg';
export type InputProps = {
  size?: InputSizes;
  isRequired?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isFullWidth?: boolean;
  describedBy?: string;
  autoFocus?: boolean;
};

type ObjProps = {
  id: string;
  AddonLeft: typeof InputAddonLeft;
  AddonRight: typeof InputAddonRight;
  ElementLeft: typeof InputElementLeft;
  ElementRight: typeof InputElementRight;
  Field: typeof InputField;
  Number: typeof InputNumber;
};

const ctx = createContext<InputProps>({});
export function useInputProps() {
  return useContext(ctx);
}

export const Input = createComponent<InputProps, ObjProps>(
  ({
    size = 'md',
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    isFullWidth,
    describedBy,
    className,
    children,
    ...props
  }) => {
    const formControlProps = useFormControlProps();
    const disabled =
      isDisabled ||
      isReadOnly ||
      formControlProps.isDisabled ||
      formControlProps.isReadOnly;

    const providerProps = {
      size,
      isRequired,
      isInvalid,
      isDisabled,
      isReadOnly,
      describedBy,
      ...formControlProps,
    };

    const { isFocusVisible, focusProps } = useFocusRing({
      isTextInput: true,
      within: true,
      autoFocus: props.autoFocus,
    });

    const classes = cx('fuel_Input', className, {
      focused: isFocusVisible,
    });

    const styleProps = {
      size,
      disabled,
      required: isRequired || formControlProps.isRequired,
      invalid: isInvalid || formControlProps.isInvalid,
      full: isFullWidth,
    };

    const inputProps = mergeProps(props, focusProps, { className: classes });

    return (
      <ctx.Provider value={providerProps}>
        {useCreateStyledElement(
          'div',
          styles.input,
          styleProps,
          inputProps,
          children,
        )}
      </ctx.Provider>
    );
  },
);

Input.id = 'Input';
Input.AddonLeft = InputAddonLeft;
Input.AddonRight = InputAddonRight;
Input.ElementLeft = InputElementLeft;
Input.ElementRight = InputElementRight;
Input.Field = InputField;
Input.Number = InputNumber;
