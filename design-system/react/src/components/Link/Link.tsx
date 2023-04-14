/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { allColors } from '@fuel-ui/css';
import { createElement } from 'react';
import { useLink } from 'react-aria';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';
import { Icon } from '../Icon';

import type * as t from './defs';

import { Components } from '~/defs';
import { createStyle, useElementProps, useStyles } from '~/hooks';

const _Link = _unstable_createComponent<t.LinkDef>(
  Components.Link,
  ({ as = 'a', isExternal, children, ...props }) => {
    const { linkProps } = useLink(props as any, props.ref as any);
    const classes = useStyles(styles, props);
    const customProps = {
      ...(as !== 'a' ? { role: 'link' } : {}),
      ...(isExternal && { target: '_blank', rel: 'noopener noreferrer' }),
    };

    const elementProps = useElementProps(
      props,
      classes.root,
      customProps,
      linkProps
    );

    return createElement(
      as,
      elementProps,
      <>
        {children} {isExternal && <Icon icon="LinkSimple" color="gray8" />}
      </>
    );
  }
);

export const Link = createPolymorphicComponent<t.LinkDef>(_Link);

const styles = createStyle(Components.Link, {
  root: {
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
      borderRadius: '$default',
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
      color: 'accent11',
    },
  },
});
