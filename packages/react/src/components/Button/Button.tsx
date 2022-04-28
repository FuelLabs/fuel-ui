import { AllColorKeys, cx } from '@fuel/theme'
import { FC, PropsWithChildren } from 'react'

import * as styles from './styles'

export type ButtonVariants = 'solid' | 'outlined' | 'ghost' | 'link'

export interface ButtonProps extends HTMLButtonElement {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: AllColorKeys
  variant?: ButtonVariants
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  size = 'md',
  color = 'primary',
  variant = 'solid',
  children,
  ...props
}) => {
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
      {children}
    </button>
  )
}
