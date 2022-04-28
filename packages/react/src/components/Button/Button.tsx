import { ColorKeys, cx } from '@fuel/css'
import { cloneElement, ReactElement } from 'react'
import { FC, PropsWithChildren } from 'react'
import { Icon, Icons } from '../Icon'

import * as styles from './styles'
import { Spinner } from '../Spinner'

export type ButtonVariants = 'solid' | 'outlined' | 'ghost' | 'link'

export interface ButtonProps extends HTMLButtonElement {
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
}

const ICONS_SIZE = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  size = 'md',
  color = 'primary',
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

  return (
    <button
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
