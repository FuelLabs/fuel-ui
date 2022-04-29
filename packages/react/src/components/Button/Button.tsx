import { FC, ButtonHTMLAttributes, cloneElement, ReactElement } from 'react'
import { ColorKeys, cx } from '@fuel/css'
import { Icon, Icons } from '../Icon'

import * as styles from './styles'
import { Spinner } from '../Spinner'
import { forwardRef } from 'react'

export type ButtonVariants = 'solid' | 'outlined' | 'ghost' | 'link'

export interface ButtonProps extends ButtonHTMLAttributes<any> {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  color?: ColorKeys
  variant?: ButtonVariants
  leftIcon?: Icons | ReactElement
  rightIcon?: Icons | ReactElement
  iconSize?: number
  isLoading?: boolean
  isDisabled?: boolean
  className?: string
  justIcon?: boolean
  children: string | ReactElement
}

const ICONS_SIZE = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
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
    },
    ref
  ) => {
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

    return (
      <button
        ref={ref}
        {...props}
        disabled={disabled}
        className={cx(
          { disabled },
          className,
          styles.button({
            size,
            variant,
            disabled,
            justIcon,
            color: color as any,
          })
        )}
      >
        {isLoading && <Spinner color="current" size={iconSize + 2} />}
        {!isLoading && iconLeft && <span>{iconLeft}</span>}
        {children}
        {!isLoading && iconRight && <span>{iconRight}</span>}
      </button>
    )
  }
)
