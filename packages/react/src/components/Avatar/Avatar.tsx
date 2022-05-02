import { FC } from 'react'
import { cx } from '@fuel-js/css'
import * as RAvatar from '@radix-ui/react-avatar'

import * as styles from './styles'
import { AvatarImage, AvatarImageProps } from './AvatarImage'
import { AvatarFallback, AvatarFallbackProps } from './AvatarFallback'

export type AvatarProps = RAvatar.AvatarProps & {
  size?: 'sm' | 'md' | 'lg'
}

type AvatarComponent = FC<AvatarProps> & {
  Image: FC<AvatarImageProps>
  Fallback: FC<AvatarFallbackProps>
}

export const Avatar: AvatarComponent = ({
  size,
  children,
  className,
  ...props
}) => {
  const classes = cx(className, styles.avatar({ size }))
  return (
    <RAvatar.Root {...props} className={classes}>
      {children}
    </RAvatar.Root>
  )
}

Avatar.Image = AvatarImage
Avatar.Fallback = AvatarFallback
