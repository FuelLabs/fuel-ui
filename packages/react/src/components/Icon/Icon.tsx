import { ElementType, FC } from 'react'
import { Colors, cx, css } from '@fuel-js/css'
import { IconType } from 'react-icons'
import * as IconSet from 'react-icons/bi'

export type Icons = keyof typeof IconSet

export type IconProps = {
  icon: Icons
  size?: number
  className?: string
  color?: Colors
  ['aria-label']?: string
}

export type IconComponent = FC<IconProps> & {
  [K in Icons]: IconType | ElementType
} & {
  _iconList: Icons[]
}

// @ts-ignore
export const Icon: IconComponent = ({
  icon,
  size,
  className,
  color,
  ...props
}) => {
  const Component = IconSet[icon] || icon
  const colorClass = css({ color: `$${color}` })
  const ariaLabel = props['aria-label']
  return (
    <Component
      className={cx(color && colorClass(), className)}
      {...(ariaLabel && { 'aria-label': ariaLabel })}
      {...(size && { size })}
    />
  )
}

Icon._iconList = Object.keys(IconSet) as Icons[]
