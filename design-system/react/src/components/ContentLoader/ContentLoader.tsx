import type { IContentLoaderProps } from 'react-content-loader';
import RectContentLoader from 'react-content-loader';

import { Rect } from './ContentLoaderRect';

export type ContentLoaderProps = IContentLoaderProps & {
  isFullWidth?: boolean;
};

export const ContentLoader = ({
  isFullWidth,
  ...props
}: ContentLoaderProps) => (
  <RectContentLoader
    speed={2}
    preserveAspectRatio="none"
    style={{ width: isFullWidth ? '100%' : props.width }}
    {...props}
  >
    {props.children}
  </RectContentLoader>
);

ContentLoader.Rect = Rect;
