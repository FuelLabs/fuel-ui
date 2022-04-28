import 'twin.macro'
import { AllColorKeys, cx } from '@fuel/theme'
import { cloneElement, ReactElement } from 'react'
import { FC, PropsWithChildren } from 'react'
import { Icon, Icons } from '../Icon'

import * as styles from './styles'

export type ButtonVariants = 'solid' | 'outlined' | 'ghost' | 'link'

export interface ButtonProps extends HTMLButtonElement {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  color?: AllColorKeys
  variant?: ButtonVariants
  leftIcon?: Icons | ReactElement
  rightIcon?: Icons | ReactElement
  iconSize?: number
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
  children,
  ...props
}) => {
  const iconSize = initialIconSize || ICONS_SIZE[size]

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
      className={cx(
        styles.button({
          size,
          variant,
          color: color as any,
        })
      )}
    >
      {iconLeft && <span>{iconLeft}</span>}
      {children}
      {iconRight && <span>{iconRight}</span>}
    </button>
  )
}
