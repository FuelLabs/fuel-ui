import { cx, styled } from '@fuel/css'
import * as RAvatar from '@radix-ui/react-avatar'

import * as styles from './styles'

import { createComponent } from '@/utils'

export type AvatarFallbackProps = RAvatar.AvatarFallbackProps
const Root = styled(RAvatar.Fallback)

export const AvatarFallback = createComponent<AvatarFallbackProps>(
  ({ as = 'div', className, ...props }) => {
    const classes = cx(className, styles.fallback())
    return <Root {...props} as={as} className={classes} />
  }
)
