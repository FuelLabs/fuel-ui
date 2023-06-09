import { createElement } from 'react';
import RectContentLoader from 'react-content-loader';

import { Rect } from './ContentLoaderRect';
import type { ContentLoaderProps } from './defs';

import { Components } from '~/defs';
import { useFuelTheme } from '~/hooks';
import { _unstable_createComponent } from '~/utils';

export const ContentLoader = _unstable_createComponent(
  Components.ContentLoader,
  ({
    isFullWidth,
    backgroundColor = 'cardBg',
    foregroundColor = 'textMuted',
    children,
    ...props
  }: ContentLoaderProps) => {
    const { current, themes } = useFuelTheme();
    const { colors } = themes[current].theme;
    const bg = colors[backgroundColor]?.toString() || backgroundColor;
    const fg = colors[foregroundColor]?.toString() || foregroundColor;
    const elementProps = {
      speed: 2,
      preserveAspectRatio: 'none',
      backgroundColor: bg,
      foregroundColor: fg,
      style: { width: isFullWidth ? '100%' : props.width },
      ...props,
    };

    return createElement(RectContentLoader, elementProps, children);
  }
);

ContentLoader.Rect = Rect;
