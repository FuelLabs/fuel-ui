/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Colors } from '@fuel-ui/css';
import { mergeRefs } from '@react-aria/utils';
import type { ReactElement, ReactNode } from 'react';
import { createElement, useRef, cloneElement } from 'react';
import { mergeProps, useButton } from 'react-aria';

import { Icon } from '../Icon';
import { Spinner } from '../Spinner';

import type * as t from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks/useStore';
import { createComponent2, createPolymorphicComponent } from '~/utils';
import { omit } from '~/utils/helpers';

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
  return (
    icon &&
    cloneElement(icon as ReactElement, {
      label: iconAriaLabel,
      size: iconSize,
      ...(color && { color }),
    })
  );
}

export function getIconSize(size: t.ButtonSizes, iconSize?: number) {
  if (iconSize) return iconSize;
  if (size === 'lg') return 20;
  if (size === 'md') return 18;
  return 16;
}

type GetChildrenParams = t.ButtonProps & {
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

export const SPINNER_SIZE = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
};

const _Button = createComponent2<t.ButtonDef>(
  Components.Button,
  ({ as = 'button', children, ref, ...props }) => {
    const {
      size = 'md',
      isLoading,
      isDisabled,
      isLink,
      leftIcon,
      leftIconAriaLabel,
      rightIcon,
      rightIconAriaLabel,
    } = props;

    const disabled = isLoading || isDisabled;
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
      as,
      disabled,
      ref: mergeRefs(ref!, innerRef),
      'aria-disabled': isDisabled,
      'aria-busy': isLoading,
      ...(!isLink && { 'aria-pressed': !isDisabled && isPressed }),
    };

    const allProps = mergeProps(props, buttonProps, customProps);
    const classes = useStyles(styles, allProps);
    const iconSize = getIconSize(size, props.iconSize);
    const iconLeft = createIcon(leftIcon, leftIconAriaLabel, iconSize);
    const iconRight = createIcon(rightIcon, rightIconAriaLabel, iconSize);
    const elementProps = useElementProps(allProps, classes.root);

    return createElement(
      as,
      elementProps,
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

export const Button = createPolymorphicComponent<t.ButtonDef>(_Button);
Button.id = 'Button';
