import type { IContentLoaderProps } from 'react-content-loader';
import RectContentLoader from 'react-content-loader';

import { Rect } from './ContentLoaderRect';

export type ContentLoaderProps = IContentLoaderProps & {
  isFullWidth?: boolean;
};

export const ContentLoader = (props: ContentLoaderProps) => (
  <RectContentLoader
    speed={2}
    viewBox="0 0 100% 100%"
    style={{ width: props.isFullWidth ? '100%' : props.width }}
    {...props}
  >
    {props.children}
  </RectContentLoader>
);

ContentLoader.Rect = Rect;
