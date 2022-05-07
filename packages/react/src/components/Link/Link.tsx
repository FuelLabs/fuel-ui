import { allColors, Colors, css, cx, styled } from '@fuel-js/css'

import { HTMLProps, createComponent } from '@/utils'
import { Icon } from '../Icon'

export type LinkProps = HTMLProps['a'] & {
  isExternal?: boolean
  color?: Colors
}

const Root = styled('a')

export const Link = createComponent<LinkProps>(
  ({ isExternal, className, children, color, ...props }) => {
    const customProps = {
      ...props,
      role: 'link',
      className: cx(className, styles.link({ color })),
      ...(isExternal && { target: '_blank', rel: 'noopener noreferrer' }),
    }
    return (
      <Root {...props} {...customProps}>
        {children} {isExternal && <Icon icon="BiLinkExternal" />}
      </Root>
    )
  }
)

const styles = {
  link: css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '$2',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },

    variants: {
      // TODO: adjust typings
      color: (allColors as any[]).reduce(
        (obj, key) => ({
          ...obj,
          [key]: {
            color: `$${key}`,
            '&:visited': {
              color: `$${key}`,
            },
          },
        }),
        {}
      ),
    },

    defaultVariants: {
      color: 'accent9',
    },
  }),
}
