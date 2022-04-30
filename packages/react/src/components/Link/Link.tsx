import { createElement } from 'react'
import { allColors, Colors, css, cx } from '@fuel/css'

import { HTMLProps, createComponent } from '@/utils'
import { Icon } from '../Icon'

export type LinkProps = HTMLProps['a'] & {
  isExternal?: boolean
  color?: Colors
}

export const Link = createComponent<LinkProps, HTMLDivElement>(
  ({ as = 'a', children, isExternal, className, color, ...props }) => {
    const customProps = {
      ...props,
      role: 'link',
      className: cx(className, styles.link({ color })),
      ...(isExternal && { target: '_blank', rel: 'noopener noreferrer' }),
    }

    return createElement(
      as,
      customProps,
      <>
        {children} {isExternal && <Icon icon="BiLinkExternal" />}
      </>
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
