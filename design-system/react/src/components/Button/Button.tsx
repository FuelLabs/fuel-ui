import type { Colors } from '@fuel-ui/css';
import { mergeRefs } from '@react-aria/utils';
import type { ReactElement, ReactNode } from 'react';
import { createElement, useRef, cloneElement } from 'react';
import { mergeProps, useButton } from 'react-aria';
import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks/useStore';
import { _unstable_createComponent, createPolymorphicComponent } from '~/utils';
import { omit } from '~/utils/helpers';

import { Icon } from '../Icon';
import { Spinner } from '../Spinner';

import type * as t from './defs';
import { styles } from './styles';

export function createIcon(
  icon: string | ReactNode,
  iconAriaLabel?: string,
  iconSize?: number,
  color?: Colors,
) {
  if (typeof icon === 'string') {
    return (
      <Icon
        icon={icon}
        label={iconAriaLabel}
        size={iconSize || 20}
        color={color}
      />
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
  loadingText,
  size = 'md',
  children,
  iconLeft,
  iconRight,
}: GetChildrenParams) {
  if (isLoading) {
    return (
      <>
        <Spinner color="current" size={SPINNER_SIZE[size]} />
        {loadingText || 'Loading...'}
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

function getPropsToOmit(props: t.ButtonDef['props']) {
  const toOmit = [];
  if (!props.onKeyDown) toOmit.push('onKeyDown');
  if (!props.onKeyUp) toOmit.push('onKeyUp');
  if (!props.onKeyPress) toOmit.push('onKeyPress');
  if (!props.onFocus) toOmit.push('onFocus');
  if (!props.onBlur) toOmit.push('onBlur');
  if (!props.onMouseDown) toOmit.push('onMouseDown');
  if (!props.onDragStart) toOmit.push('onDragStart');
  if (!props.onPointerDown) toOmit.push('onPointerDown');
  if (!props.onPointerUp) toOmit.push('onPointerUp');
  if (!props.onPress) toOmit.push('onPress');
  if (!props.onPressStart) toOmit.push('onPressStart');
  if (!props.onPressEnd) toOmit.push('onPressEnd');
  if (!props.onPressChange) toOmit.push('onPressChange');
  if (!props.onPressUp) toOmit.push('onPressUp');
  return toOmit;
}

export const SPINNER_SIZE = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
};

const _Button = _unstable_createComponent<t.ButtonDef>(
  Components.Button,
  ({ as = 'button', children, ref, ...props }) => {
    const {
      size = 'md',
      isLoading,
      loadingText,
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
        ...omit(['onClick', 'onPress'], props),
        isDisabled: disabled,
        ...(isLink && { elementType: 'a' }),
        /**
         * Need this because of triggers components on Radix uses asChild props
         * to pass handlers directly with onClick instead of onPress
         */
      },
      innerRef,
    );

    const customProps = {
      as,
      role: props.role || buttonProps.role || 'button',
      ref: mergeRefs(ref, innerRef),
      'aria-busy': isLoading,
      ...(!isLink && { 'aria-pressed': !disabled && isPressed }),
    };

    const propsToOmit = getPropsToOmit(props);
    const allProps = mergeProps(props, buttonProps, customProps);
    const classes = useStyles(styles, allProps);
    const iconSize = getIconSize(size, props.iconSize);
    const iconLeft = createIcon(leftIcon, leftIconAriaLabel, iconSize);
    const iconRight = createIcon(rightIcon, rightIconAriaLabel, iconSize);
    const elementProps = useElementProps(
      omit(propsToOmit, allProps),
      classes.root,
    );

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      if (
        typeof props.onClick !== 'undefined' &&
        typeof props.onPress === 'undefined'
      ) {
        props.onClick(e);
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      props.onPress?.(e as any);
    }

    return createElement(
      as,
      mergeProps(elementProps, {
        onClick: handleClick,
      }),
      getChildren({
        size,
        isLoading,
        loadingText,
        children,
        iconLeft,
        iconRight,
      }),
    );
  },
);

export const Button = createPolymorphicComponent<t.ButtonDef>(_Button);
Button.id = 'Button';
