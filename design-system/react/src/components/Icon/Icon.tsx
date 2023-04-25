import { cx } from '@fuel-ui/css';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import * as PhosphorIcons from 'phosphor-react';
import type { ReactElement } from 'react';
import { createElement, useMemo, cloneElement } from 'react';

import { _unstable_createComponent } from '../../utils';
import { omit } from '../../utils/helpers';

import type * as t from './defs';

import { Components } from '~/defs';
import { createStyle, useElementProps, useStyles } from '~/hooks';

export const Icon = _unstable_createComponent<t.IconDef>(
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
    weight = 'regular',
    mirrored,
    ...props
  }) => {
    const iconProps = {
      className: cx(`fuel_Icon-${icon}`, className),
      focusable: false,
      'aria-hidden': true,
      alt,
      size,
      weight,
      mirrored,
    };

    const iconElement = useMemo<ReactElement>(
      (() => {
        if (typeof icon === 'string') {
          const Component = PhosphorIcons[icon];
          return <Component />;
        }
        return icon;
      }) as () => ReactElement,
      [icon]
    );

    let label = initialLabel || props['aria-label'];
    if (!label && typeof icon === 'string') {
      label = `Icon ${icon}`;
    }

    const classes = useStyles(styles, {
      ...props,
      css: {
        display: inline ? 'inline-flex' : 'flex',
        ...(color && { color: `$${color}` }),
        ...css,
      },
    });

    const elementProps = useElementProps(props, classes.root, {
      'aria-label': label || '',
      className: wrapperClassName,
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
