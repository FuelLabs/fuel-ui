import { FC } from 'react'
import { cx } from '@fuel/css'
import * as RAvatar from '@radix-ui/react-avatar'

import * as styles from './styles'

export type AvatarFallbackProps = RAvatar.AvatarFallbackProps

export const AvatarFallback: FC<AvatarFallbackProps> = ({
  className,
  ...props
}) => {
  const classes = cx(className, styles.fallback())
  return <RAvatar.Fallback {...props} className={classes} />
}
