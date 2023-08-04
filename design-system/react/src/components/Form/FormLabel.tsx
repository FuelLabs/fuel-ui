import { cx } from '@fuel-ui/css';
import * as Label from '@radix-ui/react-label';

import { createComponent, useCreateStyledElement } from '../../utils';

import { useFormControlProps } from './FormControl';
import * as styles from './styles';

export type FormLabelProps = Label.LabelProps;

type ObjProps = {
  id: string;
};

export const FormLabel = createComponent<FormLabelProps, ObjProps>(
  ({ as = 'label', children, className, ...props }) => {
    const { id, ...parentProps } = useFormControlProps();
    const classes = cx('fuel_FormLabel', className);

    const customProps = {
      ...props,
      as,
      id: id ? `label${id}` : props.id,
      className: classes,
    };

    return useCreateStyledElement(
      Label.Root,
      styles.label,
      { required: parentProps?.isRequired },
      customProps,
      children,
    );
  },
);

FormLabel.id = 'FormLabel';
