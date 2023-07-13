/* eslint-disable @typescript-eslint/no-explicit-any */
import { utils } from '@fuel-ui/css';
import { createElement } from 'react';
import { Components } from '~/defs';
import { createStyle, useElementProps, useStyles } from '~/hooks';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';
import { createIcon } from '../Button';

import type * as t from './defs';

const _Text = _unstable_createComponent<t.TextDef>(
  Components.Text,
  ({
    as = 'p',
    children,
    iconSize = 16,
    iconColor = 'textIcon',
    leftIcon,
    rightIcon,
    leftIconAriaLabel,
    rightIconAriaLabel,
    css,
    color = 'textColor',
    ...props
  }) => {
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
      withIcon,
      css: {
        color: `$${color}`,
        ...css,
      },
    } as any);
    const elementProps = useElementProps(props, classes.root);
    const customChildren = (
      <>
        {iconLeft} {children} {iconRight}
      </>
    );
    return createElement(as, elementProps, customChildren);
  },
);

const styles = createStyle(Components.Text, {
  root: {
    margin: 0,

    variants: {
      // TODO: adjust typings
      fontSize: (utils.textSize.__keys as any[]).reduce(
        (obj, key) => ({ ...obj, [key]: { textSize: key } }),
        {},
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
    },
  },
});

export const Text = createPolymorphicComponent<t.TextDef>(_Text);
