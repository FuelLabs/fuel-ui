import { cloneElement, createElement, ReactElement } from 'react'
import { ColorKeys, cx } from '@fuel/css'

import { createComponent, HTMLProps } from '@/utils'
import { Icon, Icons } from '../Icon'
import { Spinner } from '../Spinner'
import * as styles from './styles'

export type ButtonVariants = 'solid' | 'outlined' | 'ghost' | 'link'

export type ButtonProps = HTMLProps['button'] & {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  color?: ColorKeys
  variant?: ButtonVariants
  leftIcon?: Icons | ReactElement
  rightIcon?: Icons | ReactElement
  iconSize?: number
  isLoading?: boolean
  isDisabled?: boolean
  justIcon?: boolean
}

const ICONS_SIZE = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
}

export const Button = createComponent<ButtonProps, HTMLButtonElement>(
  ({
    as = 'button',
    size = 'md',
    color = 'accent',
    variant = 'solid',
    leftIcon,
    rightIcon,
    iconSize: initialIconSize,
    isLoading,
    isDisabled,
    className,
    justIcon,
    children,
    ...props
  }) => {
    const disabled = isLoading || isDisabled
    const defaultIconSize = initialIconSize || ICONS_SIZE[size]
    const iconSize = justIcon ? defaultIconSize + 2 : defaultIconSize

    const iconLeft =
      typeof leftIcon === 'string' ? (
        <Icon icon={leftIcon} size={iconSize} />
      ) : (
        leftIcon && cloneElement(leftIcon, { size: iconSize })
      )

    const iconRight =
      typeof rightIcon === 'string' ? (
        <Icon icon={rightIcon} size={iconSize} />
      ) : (
        rightIcon && cloneElement(rightIcon, { size: iconSize })
      )

    const classes = cx(
      className,
      styles.button({
        size,
        variant,
        disabled,
        justIcon,
        color: color as any,
      })
    )

    /**
     * Modify handlers to don't execute if disabled is true
     */
    const handleProps = Object.entries(props)
      .filter(([key]) => key.startsWith('on'))
      .reduce(
        (obj, [key, val]) => ({ ...obj, [key]: disabled ? () => null : val }),
        {}
      )

    const buttonProps = {
      ...props,
      ...handleProps,
      disabled,
      'aria-disabled': disabled,
      className: classes,
    }

    return createElement(
      as,
      buttonProps,
      <>
        {isLoading && <Spinner color="current" size={iconSize + 2} />}
        {!isLoading && iconLeft && iconLeft}
        {isLoading ? 'Loading...' : children}
        {!isLoading && iconRight && iconRight}
      </>
    )
  }
)

Button.defaultProps = {
  role: 'button',
  type: 'button',
}
