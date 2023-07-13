/* eslint-disable @typescript-eslint/no-explicit-any */
import { allColors, utils } from '@fuel-ui/css';
import { createElement } from 'react';
import { Components } from '~/defs';
import { createStyle, useElementProps, useStyles } from '~/hooks';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';
import { createIcon } from '../Button';

import type * as t from './defs';

function getIconSize(as: t.HeadingProps['as'], iconSize?: number) {
  if (iconSize) return iconSize;
  if (as === 'h1' || as === 'h2') return 22;
  if (as === 'h5' || as === 'h6') return 16;
  return 18;
}

const _Heading = _unstable_createComponent<t.HeadingDef>(
  Components.Heading,
  ({
    as = 'h2',
    fontSize,
    color = 'textHeading',
    iconColor = 'textIcon',
    iconSize: initialIconSize,
    leftIcon,
    rightIcon,
    leftIconAriaLabel,
    rightIconAriaLabel,
    children,
    css,
    ...props
  }) => {
    const iconSize = getIconSize(as, initialIconSize);
    const iconLeft = createIcon(
      leftIcon,
      leftIconAriaLabel,
      iconSize,
      iconColor,
    );
    const iconRight = createIcon(
      rightIcon,
      rightIconAriaLabel,
      iconSize,
      iconColor,
    );
    const withIcon = Boolean(leftIcon || rightIcon);
    const classes = useStyles(styles, {
      ...props,
      fontSize,
      as,
      withIcon,
      css: {
        color: `$${color}`,
        ...css,
      },
    } as any);

    const elementProps = useElementProps(props, classes.root, {
      role: 'heading',
    });

    return createElement(
      as,
      elementProps,
      <>
        {iconLeft} {children} {iconRight}
      </>,
    );
  },
);

export const Heading = createPolymorphicComponent<t.HeadingDef>(_Heading);

const styles = createStyle(Components.Heading, {
  root: {
    mt: '0.5rem',
    mb: '1.25rem',
    letterSpacing: '-0.02em',
    color: '$intentsBase12',
    fontFamily: '$heading',
    fontWeight: '$normal',

    variants: {
      // FIX: adjust type type
      fontSize: (utils.textSize.__keys as any[]).reduce(
        (obj, key) => ({ ...obj, [key]: { textSize: key } }),
        {},
      ),
      // FIX: adjust type type
      fontColor: (allColors as any[]).reduce(
        (obj, key) => ({ ...obj, [key]: { color: `$${key}` } }),
        {},
      ),
      as: {
        h1: {
          textSize: '4xl',
        },
        h2: {
          textSize: '3xl',
        },
        h3: {
          textSize: '2xl',
        },
        h4: {
          textSize: 'xl',
        },
        h5: {
          textSize: 'lg',
        },
        h6: {
          textSize: 'base',
        },
      },
      withIcon: {
        true: {
          display: 'inline-flex',
          gap: '$2',
        },
      },
    },

    defaultVariants: {
      fontSize: 'md',
      fontColor: 'fontColor',
    },
  },
});
