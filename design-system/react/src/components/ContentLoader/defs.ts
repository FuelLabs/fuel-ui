import type { IContentLoaderProps } from 'react-content-loader';
import type { Components } from '~/defs';
import type { CreateComponent } from '~/utils';

export type ContentLoaderProps = IContentLoaderProps & {
  isFullWidth?: boolean;
};

export type ContentLoaderRectProps = React.SVGProps<SVGRectElement> & {
  stickX?: 'right' | 'left';
  stickY?: 'top' | 'bottom';
};

export type ContentLoaderDef = CreateComponent<{
  type: 'div';
  component: Components.ContentLoader;
  element: HTMLDivElement;
  props: ContentLoaderProps;
  styles: 'root';
  omit: 'as';
}>;
