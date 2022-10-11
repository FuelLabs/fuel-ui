/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ColorKeys, Colors } from '@fuel-ui/css';
import { styled, css, cx } from '@fuel-ui/css';
import { mergeRefs } from '@react-aria/utils';
import type { ReactNode } from 'react';
import { useMemo, createElement, useRef, cloneElement } from 'react';
import type { AriaButtonProps } from 'react-aria';
import { mergeProps, useButton } from 'react-aria';

import { createComponent } from '../../utils';
import type { HTMLProps } from '../../utils';
import { omit } from '../../utils/helpers';
import type { IconProps } from '../Icon';
import { Icon } from '../Icon';
import { Spinner } from '../Spinner';

import * as styles from './styles';

export function createIcon(
  icon: string | ReactNode,
  iconAriaLabel?: string,
  iconSize?: number,
  color?: Colors
) {
  if (typeof icon === 'string') {
    return (
      <Icon icon={icon} label={iconAriaLabel} size={iconSize} color={color} />
    );
  }
  // TODO: fix any here
  return (
    icon &&
    cloneElement(icon as any, {
      label: iconAriaLabel,
      size: iconSize,
      ...(color && { color }),
    })
  );
}

export function getIconSize(size: ButtonSizes, iconSize?: number) {
  if (iconSize) return iconSize;
  if (size === 'lg') return 20;
  if (size === 'md') return 18;
  return 16;
}

type GetChildrenParams = ButtonProps & {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};
function getChildren({
  isLoading,
  size = 'md',
  children,
  iconLeft,
  iconRight,
}: GetChildrenParams) {
  if (isLoading) {
    return (
      <>
        <Spinner color="current" size={SPINNER_SIZE[size]} /> Loading...
      </>
    );
  }
  return (
    <>
      {iconLeft}
      {children}
      {iconRight}
    </>
  );
}

export type ButtonVariants = 'solid' | 'outlined' | 'ghost' | 'link';
export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg';

export type ButtonBaseProps = {
  size?: ButtonSizes;
  color?: ColorKeys;
  variant?: ButtonVariants;
  iconSize?: number;
  leftIcon?: IconProps['icon'];
  leftIconAriaLabel?: string;
  rightIcon?: IconProps['icon'];
  rightIconAriaLabel?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
};

export type ButtonProps = Omit<HTMLProps['button'], 'onClick'> &
  AriaButtonProps<'button'> &
  ButtonBaseProps & {
    justIcon?: boolean;
    isLink?: boolean;
    /**
     * @deprecated Use onPress instead. onPress support Enter and Space keyboard.
     * You're able to use just one or another, don't use onClick and onPress together
     */
    onClick?: HTMLProps['button']['onClick'];
  };

type ObjProps = {
  id: string;
};

export const SPINNER_SIZE = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
};

const Root = styled('button');

export const Button = createComponent<ButtonProps, ObjProps>(
  ({
    as = 'button',
    css: customCSS,
    size = 'md',
    color = 'accent',
    variant = 'solid',
    iconSize: initialIconSize,
    leftIcon,
    leftIconAriaLabel,
    rightIcon,
    rightIconAriaLabel,
    isLoading,
    isDisabled,
    className,
    justIcon,
    isLink,
    children,
    ref,
    ...props
  }) => {
    const disabled = isLoading || isDisabled;
    const iconSize = getIconSize(size, initialIconSize);
    const iconLeft = createIcon(leftIcon, leftIconAriaLabel, iconSize);
    const iconRight = createIcon(rightIcon, rightIconAriaLabel, iconSize);
    const customCSSStr = JSON.stringify(customCSS);
    const customStyle = useMemo(() => css(customCSS || {})(), [customCSSStr]);
    const classes = cx([
      'fuel_button',
      ...(customCSS ? [customStyle] : []),
      className,
      styles.button({
        size,
        variant,
        disabled,
        justIcon,
        color,
        isLink,
      }),
    ]);

    const innerRef = useRef<HTMLButtonElement | null>(null);
    const { buttonProps, isPressed } = useButton(
      {
        ...omit(['onClick'], props),
        isDisabled,
        ...(isLink && { elementType: 'a' }),
        /**
         * Need this because of triggers components on Radix uses asChild props
         * to pass handlers directly with onClick instead of onPress
         */
        ...(typeof props.onClick !== 'undefined' &&
          typeof props.onPress === 'undefined' && {
            onPress: props.onClick as any,
          }),
      },
      innerRef
    );

    const customProps = {
      ...omit(['onPress', 'onClick'], props),
      as,
      disabled,
      ref: mergeRefs(ref!, innerRef),
      className: classes,
      'aria-disabled': isDisabled,
      'aria-busy': isLoading,
      ...(!isLink && { 'aria-pressed': !isDisabled && isPressed }),
    };

    return createElement(
      Root,
      mergeProps(buttonProps, customProps),
      getChildren({
        size,
        isLoading,
        children,
        iconLeft,
        iconRight,
      })
    );
  }
);

Button.id = 'Button';
