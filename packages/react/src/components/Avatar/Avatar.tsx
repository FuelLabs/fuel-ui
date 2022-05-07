import { cx, styled } from '@fuel-js/css'
import * as RAvatar from '@radix-ui/react-avatar'

import * as styles from './styles'
import { AvatarImage } from './AvatarImage'
import { AvatarFallback } from './AvatarFallback'
import { createComponent } from '@/utils'

export type AvatarProps = RAvatar.AvatarProps & {
  size?: 'sm' | 'md' | 'lg'
}

const Root = styled(RAvatar.Root)

const AvatarBase = createComponent<AvatarProps>(
  ({ size, children, className, ...props }) => {
    const classes = cx(className, styles.avatar({ size }))
    return (
      <Root {...props} className={classes}>
        {children}
      </Root>
    )
  }
)

type AvatarComponent = typeof AvatarBase & {
  Image: typeof AvatarImage
  Fallback: typeof AvatarFallback
}

export const Avatar = AvatarBase as AvatarComponent
Avatar.Image = AvatarImage
Avatar.Fallback = AvatarFallback
