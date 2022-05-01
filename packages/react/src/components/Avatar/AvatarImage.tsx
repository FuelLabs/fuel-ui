import { FC } from 'react'
import { cx } from '@fuel/css'
import * as RAvatar from '@radix-ui/react-avatar'

import * as styles from './styles'

export type AvatarImageProps = RAvatar.AvatarImageProps

export const AvatarImage: FC<AvatarImageProps> = ({ className, ...props }) => {
  const classes = cx(className, styles.image())
  return <RAvatar.Image {...props} className={classes} />
}
