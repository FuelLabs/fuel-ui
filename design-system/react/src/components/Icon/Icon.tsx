import { cx, styled } from '@fuel-ui/css';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import * as PhosphorIcons from 'phosphor-react';
import type { ReactElement } from 'react';
import { createElement, useMemo, cloneElement } from 'react';

import { createComponent2 } from '../../utils';
import { omit } from '../../utils/helpers';

import type * as t from './types';

import { createStyle, useElementProps, useStyles } from '~/hooks';
import { Components } from '~/types';

export const Icon = createComponent2<t.IconDef>(
  Components.Icon,
  ({
    as = 'i',
    label: initialLabel,
    inline,
    icon,
    color,
    className,
    wrapperClassName,
    css,
    alt,
    size,
    weight,
    mirrored,
    ...props
  }) => {
    const iconElement = useMemo<ReactElement>(
      (() => {
        if (typeof icon === 'string') {
          const Component = styled(PhosphorIcons[icon]);
          return <Component />;
        }
        return icon;
      }) as () => ReactElement,
      [icon]
    );

    const label =
      initialLabel || props['aria-label'] || typeof icon === 'string'
        ? `Icon ${icon}`
        : '';

    const iconProps = {
      className: cx(`fuel_Icon-${icon}`, className),
      focusable: false,
      'aria-hidden': true,
      alt,
      size,
      weight,
      mirrored,
    };

    const classes = useStyles(styles, props);
    const elementProps = useElementProps(props, classes.root, {
      'aria-label': label,
      className: wrapperClassName,
      css: {
        display: inline ? 'inline-flex' : 'flex',
        ...(color && { color: `$${color}` }),
        ...css,
      },
    });

    return createElement(
      as,
      elementProps,
      <>
        {cloneElement(iconElement, iconProps)}
        <VisuallyHidden.Root>{label || icon}</VisuallyHidden.Root>
      </>
    );
  }
);

const iconList = Object.keys(
  omit(['Icon', 'IconProps', 'IconWeight', 'IconContext'], PhosphorIcons)
) as t.Icons[];

Icon.id = 'Icon';
Icon.iconList = iconList;
Icon.is = (icon: t.Icons) => icon;

const styles = createStyle(Components.Icon, {
  root: {
    is: ['centered'],
  },
});
