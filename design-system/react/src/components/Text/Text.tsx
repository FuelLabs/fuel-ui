/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Colors } from '@fuel-ui/css';
import { css, allColors, cx, utils } from '@fuel-ui/css';

import type { HTMLProps } from '../../utils';
import { createStyledElement, createComponent } from '../../utils';
import { createIcon } from '../Button';
import type { IconProps } from '../Icon';

export type TextProps = HTMLProps['p'] & {
  fontSize?: utils.TextSizes;
  color?: Colors;
  iconSize?: number;
  iconColor?: Colors;
  leftIcon?: IconProps['icon'];
  rightIcon?: IconProps['icon'];
  leftIconAriaLabel?: string;
  rightIconAriaLabel?: string;
};

export const Text = createComponent<TextProps>(
  ({
    fontSize,
    color,
    children,
    className,
    iconSize = 16,
    iconColor = 'gray8',
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
    const classes = cx('fuel_text', className);
    return createStyledElement(
      'p',
      styles,
      { fontSize, color, withIcon },
      { ...props, className: classes },
      <>
        {iconLeft} {children} {iconRight}
      </>
    );
  }
);

const styles = css({
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
});
