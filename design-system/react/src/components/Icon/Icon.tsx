/* eslint-disable @typescript-eslint/no-explicit-any */
import { cx } from '@fuel-ui/css';
import sprite from '@fuel-ui/icons/sprite.svg';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import type { ReactElement } from 'react';
import { Fragment, cloneElement, createElement, useMemo } from 'react';
import { Components } from '~/defs';
import { createStyle, useElementProps, useStyles } from '~/hooks/useStore';

import { _unstable_createComponent } from '../../utils';

import type * as t from './defs';

export const Icon = _unstable_createComponent<t.IconDef>(
  Components.Icon,
  (props) => {
    const {
      as = 'span',
      label: initialLabel,
      inline,
      icon,
      color,
      className,
      wrapperClassName,
      css,
      size = 18,
      stroke = 1.5,
      svgProps,
      ...rest
    } = props;

    const iconProps = {
      'aria-hidden': true,
      className: cx('fuel_Icon', `fuel_Icon-${icon}`, className),
      focusable: false,
      strokeWidth: String(stroke),
    };

    let label = initialLabel || rest['aria-label'];
    if (!label && typeof icon === 'string') {
      label = `Icon ${icon}`;
    }
    if (!label && (icon as ReactElement)?.props?.icon) {
      label = `Icon ${(icon as ReactElement).props?.icon}`;
    }

    const classes = useStyles(styles, {
      ...rest,
      css: {
        display: inline ? 'inline-flex' : 'flex',
        ...(color && { color: `$${color}` }),
        ...css,
      },
    });

    const elementProps = useElementProps(rest, classes.root, {
      'aria-label': label,
      className: wrapperClassName,
    });

    const children = useMemo(() => {
      if (typeof icon === 'string') {
        return (
          <>
            <svg
              fill="transparent"
              {...iconProps}
              {...svgProps}
              width={size}
              height={size}
            >
              <use href={`${sprite}#${icon}`} />
            </svg>
            <VisuallyHidden.Root>{label || icon}</VisuallyHidden.Root>
          </>
        );
      }
      return cloneElement(icon as ReactElement, elementProps);
    }, [icon]);

    return typeof icon === 'string'
      ? createElement(as, elementProps, children)
      : createElement(Fragment, null, children);
  },
);

Icon.id = 'Icon';
Icon.is = (icon: t.Icons) => icon;

const styles = createStyle(Components.Icon, {
  root: {
    is: ['centered'],

    '&, & *': {
      bg: 'transparent !important',
    },
  },
});
