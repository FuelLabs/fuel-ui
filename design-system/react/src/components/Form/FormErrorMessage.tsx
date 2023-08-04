import { cx } from '@fuel-ui/css';

import { createComponent } from '../../utils';
import type { TextProps } from '../Text';
import { Text } from '../Text';

import { useFormControlProps } from './FormControl';
import * as styles from './styles';

export type FormErrorMessageProps = TextProps;

type ObjProps = {
  id: string;
};

export const FormErrorMessage = createComponent<
  FormErrorMessageProps,
  ObjProps
>(({ as = 'div', color, fontSize = 'sm', children, className, ...props }) => {
  const { id, ...parentProps } = useFormControlProps();
  const classes = cx(
    'fuel_FormErrorMessage',
    className,
    styles.errorMessage({}),
  );

  const customProps = {
    ...props,
    id: `feedback${id}`,
    className: classes,
  };

  return (
    <Text
      as={as}
      fontSize={fontSize}
      {...customProps}
      color={color || 'intentsError9'}
      aria-hidden={!parentProps?.isInvalid}
    >
      {children}
    </Text>
  );
});

FormErrorMessage.id = 'FormErrorMessage';
