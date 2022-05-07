import { cx, styled } from '@fuel-js/css'
import * as RAvatar from '@radix-ui/react-avatar'

import { createComponent } from '@/utils'
import * as styles from './styles'

export type AvatarFallbackProps = RAvatar.AvatarFallbackProps
const Root = styled(RAvatar.Fallback)

export const AvatarFallback = createComponent<AvatarFallbackProps>(
  ({ as = 'div', className, ...props }) => {
    const classes = cx(className, styles.fallback())
    return <Root {...props} as={as} className={classes} />
  }
)
