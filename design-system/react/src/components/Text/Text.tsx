/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { allColors, utils } from '@fuel-ui/css';
import { createElement } from 'react';

import { createComponent2, createPolymorphicComponent } from '../../utils';
import { createIcon } from '../Button';

import type * as t from './types';

import { createStyle, useElementProps, useStyles } from '~/hooks';
import { Components } from '~/types';

const _Text = createComponent2<t.TextDef>(
  Components.Text,
  ({
    as = 'p',
    children,
    iconSize = 16,
    iconColor = 'iconColor',
    leftIcon,
    rightIcon,
    leftIconAriaLabel,
    rightIconAriaLabel,
    ...props
  }) => {
    const iconLeft = createIcon(
      leftIcon,
      leftIconAriaLabel,
      iconSize,
      iconColor
    );
    const iconRight = createIcon(
      rightIcon,
      rightIconAriaLabel,
      iconSize,
      iconColor
    );
    const withIcon = Boolean(leftIcon || rightIcon);
    const classes = useStyles(styles, { ...props, withIcon } as any);
    const elementProps = useElementProps(props, classes.root);
    const customChildren = (
      <>
        {iconLeft} {children} {iconRight}
      </>
    );
    return createElement(as, elementProps, customChildren);
  }
);

const styles = createStyle(Components.Text, {
  root: {
    margin: 0,

    variants: {
      // TODO: adjust typings
      fontSize: (utils.textSize.__keys as any[]).reduce(
        (obj, key) => ({ ...obj, [key]: { textSize: key } }),
        {}
      ),
      // TODO: adjust typings
      color: (allColors as any[]).reduce(
        (obj, key) => ({ ...obj, [key]: { color: `$${key}` } }),
        {}
      ),
      withIcon: {
        true: {
          display: 'inline-flex',
          gap: '$2',
        },
      },
    },

    defaultVariants: {
      fontSize: 'base',
      color: 'textColor',
    },
  },
});

export const Text = createPolymorphicComponent<t.TextDef>(_Text);
