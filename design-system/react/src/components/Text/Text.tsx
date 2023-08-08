/* eslint-disable @typescript-eslint/no-explicit-any */
import { utils } from '@fuel-ui/css';
import { createStyle, useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';
import { createIcon } from '../Button';

import type { TextDef } from './defs';

const _Text = _unstable_createComponent<TextDef>(
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
    });

    return _unstable_createEl(
      as,
      { ...props, ...classes.root },
      <>
        {iconLeft} {children} {iconRight}
      </>,
    );
  },
);

export const Text = createPolymorphicComponent<TextDef>(_Text);

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
