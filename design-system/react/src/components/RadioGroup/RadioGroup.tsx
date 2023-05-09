import type { ThemeUtilsCSS } from '@fuel-ui/css';
import { cx } from '@fuel-ui/css';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Children, cloneElement } from 'react';

import { createComponent, createStyledElement } from '../../utils';
import { useFormControlProps } from '../Form/FormControl';

import { RadioGroupItem } from './RadioGroupItem';
import * as styles from './styles';

export type RadioGroupProps = RadioGroupPrimitive.RadioGroupProps & {
  gap?: ThemeUtilsCSS['gap'];
  direction?: 'row' | 'column';
  isDisabled?: boolean;
  isReadOnly?: boolean;
};

type ObjProps = {
  id: string;
  Item: typeof RadioGroupItem;
};

export const RadioGroup = createComponent<RadioGroupProps, ObjProps>(
  ({
    gap = '$2',
    direction = 'column',
    css,
    isDisabled,
    isReadOnly,
    children,
    className,
    ...props
  }) => {
    const formControlProps = useFormControlProps();
    const disabled =
      isDisabled ||
      isReadOnly ||
      formControlProps.isDisabled ||
      formControlProps.isReadOnly;

    const readonly = isReadOnly || formControlProps.isReadOnly;
    const classes = cx('fuel_Radio_group', className);

    const customProps = {
      ...props,
      disabled,
      className: classes,
      css: {
        gap,
        flexDirection: direction,
        ...css,
      },
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const customChildren = Children.toArray(children).map((child: any) => {
      if (child?.type?.id === 'RadioGroupItem') {
        return cloneElement(child, {
          isDisabled: disabled,
          isReadOnly: readonly,
          required: props.required || formControlProps.isRequired,
        });
      }
      return child;
    });

    return createStyledElement(
      RadioGroupPrimitive.Root,
      styles.root,
      null,
      customProps,
      customChildren
    );
  }
);

RadioGroup.id = 'RadioGroup';
RadioGroup.Item = RadioGroupItem;
