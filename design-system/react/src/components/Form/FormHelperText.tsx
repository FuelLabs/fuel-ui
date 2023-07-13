import { cx } from '@fuel-ui/css';

import { createComponent } from '../../utils';
import type { TextProps } from '../Text';
import { Text } from '../Text';

import { useFormControlProps } from './FormControl';
import * as styles from './styles';

export type FormHelperTextProps = TextProps;

type ObjProps = {
  id: string;
};

export const FormHelperText = createComponent<FormHelperTextProps, ObjProps>(
  ({ as = 'div', color, children, className, ...props }) => {
    const { id, ...parentProps } = useFormControlProps();
    const classes = cx('fuel_FormHelperText', className, styles.helperText({}));

    const customProps = {
      ...props,
      id: `helperText${id}`,
      className: classes,
    };

    return (
      <Text
        as={as}
        {...customProps}
        color={color || 'intentsBase9'}
        aria-hidden={parentProps?.isInvalid}
      >
        {children}
      </Text>
    );
  },
);

FormHelperText.id = 'FormHelperText';
