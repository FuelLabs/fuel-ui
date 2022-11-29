import type { Colors } from '@fuel-ui/css';
import { allColors, css, cx } from '@fuel-ui/css';
import { useRef } from 'react';
import { mergeProps, useLink } from 'react-aria';

import type { HTMLProps } from '../../utils';
import { createStyledElement, createComponent } from '../../utils';
import { Icon } from '../Icon';

export type LinkProps = HTMLProps['a'] & {
  isExternal?: boolean;
  color?: Colors;
};

export const Link = createComponent<LinkProps>(
  ({ isExternal, className, children, color, ...props }) => {
    const ref = useRef<HTMLLinkElement | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { linkProps } = useLink(props as any, ref);
    const customProps = {
      role: 'link',
      className: cx('fuel_link', className),
      ...(isExternal && { target: '_blank', rel: 'noopener noreferrer' }),
    };

    return createStyledElement(
      'a',
      styles.link,
      { color },
      mergeProps(props, customProps, linkProps),
      <>
        {children} {isExternal && <Icon icon="LinkSimple" color="gray8" />}
      </>
    );
  }
);

const styles = {
  link: css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '$1',
    textDecoration: 'none',
    fontWeight: '$medium',

    '&:hover': {
      textDecoration: 'underline',
    },

    '&:focus-visible': {
      outline: '2px solid $accent11',
      outlineOffset: '1px',
      borderRadius: '$md',
    },

    variants: {
      // TODO: adjust typings
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      color: 'accent11',
    },
  }),
};
