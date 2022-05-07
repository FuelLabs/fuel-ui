import { cx, styled } from '@fuel/css'
import * as RAvatar from '@radix-ui/react-avatar'

import * as styles from './styles'

import { createComponent } from '@/utils'

export type AvatarImageProps = RAvatar.AvatarImageProps

const Root = styled(RAvatar.Image)
export const AvatarImage = createComponent<AvatarImageProps>(
  ({ className, ...props }) => {
    const classes = cx(className, styles.image())
    return <Root {...props} className={classes} />
  }
)
