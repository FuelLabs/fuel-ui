import type { ThemeUtilsCSS } from '@fuel-ui/css';
import { cx } from '@fuel-ui/css';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { useId } from 'react';

import { createComponent, useCreateStyledElement } from '../../utils';
import { Flex } from '../Box/Flex';
import { Form } from '../Form';

import * as styles from './styles';

type OmitProps = 'as' | 'children';
export type RadioGroupItemProps = RadioGroupPrimitive.RadioGroupItemProps & {
  label: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  labelClassName?: string;
  labelCSS?: ThemeUtilsCSS;
};

type ObjProps = {
  id: string;
};

export const RadioGroupItem = createComponent<
  RadioGroupItemProps,
  ObjProps,
  OmitProps
>(
  ({
    isDisabled,
    isReadOnly,
    className,
    label,
    labelClassName,
    labelCSS,
    ...props
  }) => {
    const disabled = isDisabled || isReadOnly;
    const labelId = label ? `label-${useId()}` : undefined;
    const classes = cx('fuel_RadioGroupItem', className);
    const customProps = {
      ...props,
      className: classes,
      disabled,
      'aria-label': label,
      'aria-disabled': disabled,
      'aria-readonly': isReadOnly,
      ...(label && { 'aria-describedby': labelId }),
    };

    const element = useCreateStyledElement(
      RadioGroupPrimitive.Item,
      styles.item,
      null,
      customProps,
      <RadioGroupPrimitive.Indicator
        aria-disabled={disabled}
        className={styles.indicator()}
      />,
    );

    return (
      <Flex gap="$1">
        {element}{' '}
        <Form.Label
          id={labelId}
          htmlFor={props.id}
          css={{ textSize: 'sm', ...labelCSS }}
          className={cx(labelClassName)}
        >
          {label}
        </Form.Label>
      </Flex>
    );
  },
);

RadioGroupItem.id = 'RadioGroupItem';
