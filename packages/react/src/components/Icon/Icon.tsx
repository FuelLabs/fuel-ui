import { FC } from 'react'
import { Colors, cx, css } from '@fuel/css'
import { IconType } from 'react-icons'
import * as IconSet from 'react-icons/bi'

export type Icons = keyof typeof IconSet

export interface IconProps {
  icon: Icons
  size?: number
  className?: string
  color?: Colors
}

export type IconComponent = FC<IconProps> & {
  [K in Icons]: IconType
} & {
  _iconList: Icons[]
}

// @ts-ignore
export const Icon: IconComponent = ({ icon, size = 16, className, color }) => {
  const Component = IconSet[icon]
  const colorClass = css({ color: `$${color}` })
  return (
    <Component size={size} className={cx(color && colorClass(), className)} />
  )
}

Icon._iconList = Object.keys(IconSet) as Icons[]
for (const [key, value] of Object.entries(IconSet)) {
  Icon[key as Icons] = value
}
