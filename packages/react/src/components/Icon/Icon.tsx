import { ElementType, useMemo } from 'react'
import { Colors, styled } from '@fuel-js/css'
import { IconType } from 'react-icons'
import * as IconSet from 'react-icons/bi'

import { createComponent } from '@/utils'

export type Icons = keyof typeof IconSet

export type IconProps = {
  icon: Icons
  size?: number
  className?: string
  color?: Colors
  ['aria-label']?: string
}

const IconBase = createComponent<IconProps>(
  ({ icon, size, color, ...props }) => {
    const Component = useMemo(() => styled(IconSet[icon] || icon), [icon])
    const ariaLabel = props['aria-label']
    return (
      <Component
        css={{ color: `$${color}` }}
        {...(ariaLabel && { 'aria-label': ariaLabel })}
        {...(size && { size })}
      />
    )
  }
)

export type IconComponent = typeof IconBase & {
  [K in Icons]: IconType | ElementType
} & {
  _iconList: Icons[]
}

export const Icon = IconBase as IconComponent
Icon._iconList = Object.keys(IconSet) as Icons[]
