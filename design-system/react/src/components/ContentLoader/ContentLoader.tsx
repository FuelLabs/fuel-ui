import type { IContentLoaderProps } from 'react-content-loader';
import RectContentLoader from 'react-content-loader';
import { useFuelTheme } from '~/hooks';

import { Rect } from './ContentLoaderRect';

export type ContentLoaderProps = IContentLoaderProps & {
  isFullWidth?: boolean;
};

export const ContentLoader = ({
  isFullWidth,
  backgroundColor = 'cardBg',
  foregroundColor = 'textMuted',
  ...props
}: ContentLoaderProps) => {
  const { current, themes } = useFuelTheme();
  const { colors } = themes[current].theme;
  const bg = colors[backgroundColor]?.toString() || backgroundColor;
  const fg = colors[foregroundColor]?.toString() || foregroundColor;

  return (
    <RectContentLoader
      speed={2}
      preserveAspectRatio="none"
      backgroundColor={bg}
      foregroundColor={fg}
      style={{ width: isFullWidth ? '100%' : props.width }}
      {...props}
    >
      {props.children}
    </RectContentLoader>
  );
};

ContentLoader.Rect = Rect;
