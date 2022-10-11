import { FormControl } from './FormControl';
import { FormErrorMessage } from './FormErrorMessage';
import { FormHelperText } from './FormHelperText';
import { FormLabel } from './FormLabel';

export type { FormErrorMessageProps } from './FormErrorMessage';
export type { FormControlProps } from './FormControl';
export type { FormHelperTextProps } from './FormHelperText';
export type { FormLabelProps } from './FormLabel';

export const Form = {
  Control: FormControl,
  Label: FormLabel,
  HelperText: FormHelperText,
  ErrorMessage: FormErrorMessage,
};
