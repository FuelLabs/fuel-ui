/* eslint-disable @typescript-eslint/no-explicit-any */
import { cx } from '@fuel-ui/css';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import type { ReactElement } from 'react';
import { Fragment, cloneElement, useMemo } from 'react';
import { createStyle, useStore, useStyles } from '~/hooks/useStore';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';

import type { IconDef, Icons } from './defs';
const ICON_URL = '/icons.svg';

const _Icon = _unstable_createComponent<IconDef>(Components.Icon, (props) => {
  const store = useStore();
  const iconUrl = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (__STORYBOOK_FUEL_UI__) return ICON_URL;
    return store.iconUrl;
  }, [store.iconUrl]);
  const {
    as = 'i',
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

  const elementProps = {
    ...rest,
    'aria-label': label,
    className: cx(wrapperClassName, classes.root.className),
  } as any;

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
            <use xlinkHref={`${iconUrl}#${icon}`} />
          </svg>
          <VisuallyHidden.Root>{label || icon}</VisuallyHidden.Root>
        </>
      );
    }
    return cloneElement(icon as ReactElement, elementProps);
  }, [store.iconUrl, icon]);

  return typeof icon === 'string'
    ? _unstable_createEl(as, elementProps, children)
    : _unstable_createEl(Fragment, {}, children);
});

export const Icon = createPolymorphicComponent<IconDef>(_Icon);

Icon.id = 'Icon';
Icon.is = (icon: Icons) => icon;

const styles = createStyle(Components.Icon, {
  root: {
    is: ['centered'],

    '&, & *': {
      bg: 'transparent !important',
    },
  },
});
