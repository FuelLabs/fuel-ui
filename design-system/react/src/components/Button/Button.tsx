import type { Colors } from '@fuel-ui/css';
import { mergeRefs } from '@react-aria/utils';
import type { ReactElement, ReactNode } from 'react';
import { cloneElement } from 'react';
import { mergeProps } from 'react-aria';
import { Components } from '~/defs';
import { useOnPress } from '~/hooks/useOnPress';
import { useStyles } from '~/hooks/useStore';
import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '~/utils';

import { Icon } from '../Icon';
import { Spinner } from '../Spinner';

import type * as t from './defs';
import { styles } from './styles';

export function createIcon(
  icon: string | ReactNode,
  iconAriaLabel?: string,
  iconSize?: number,
  color?: Colors,
): ReactElement | null {
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
  return icon
    ? cloneElement(icon as ReactElement, {
        label: iconAriaLabel,
        size: iconSize,
        ...(color && { color }),
      })
    : null;
}

export function getIconSize(size: t.ButtonSizes, iconSize?: number) {
  if (iconSize) return iconSize;
  if (size === 'lg') return 20;
  if (size === 'md') return 18;
  return 16;
}

type GetChildrenParams = t.ButtonProps & {
  iconLeft?: ReactElement | null;
  iconRight?: ReactElement | null;
  iconLeftClass?: string;
  iconRightClass?: string;
};

function getChildren({
  isLoading,
  loadingText,
  size = 'md',
  children,
  iconLeft,
  iconRight,
  iconLeftClass,
  iconRightClass,
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
      {iconLeft && cloneElement(iconLeft, { className: iconLeftClass })}
      {children}
      {iconRight && cloneElement(iconRight, { className: iconRightClass })}
    </>
  );
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
    const {
      buttonProps,
      isPressed,
      ref: buttonRef,
    } = useOnPress(props, {
      isDisabled: disabled,
      ...(isLink && { elementType: 'a' }),
    });

    const customProps = {
      as,
      ref: mergeRefs(buttonRef, ref),
      'aria-busy': isLoading,
      ...(!isLink && { 'aria-pressed': !disabled && isPressed }),
    };

    const allProps = mergeProps(props, buttonProps, customProps);
    const classes = useStyles(styles, allProps);
    const iconSize = getIconSize(size, props.iconSize);
    const iconLeft = createIcon(leftIcon, leftIconAriaLabel, iconSize);
    const iconRight = createIcon(rightIcon, rightIconAriaLabel, iconSize);

    return _unstable_createEl(
      as,
      { ...allProps, ...classes.root },
      getChildren({
        size,
        isLoading,
        loadingText,
        children,
        iconLeft,
        iconRight,
        iconLeftClass: classes.iconLeft.className,
        iconRightClass: classes.iconRight.className,
      }),
    );
  },
);

export const Button = createPolymorphicComponent<t.ButtonDef>(_Button);
Button.id = 'Button';
