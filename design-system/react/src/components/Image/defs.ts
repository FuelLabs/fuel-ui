import type { CreateComponent, HTMLProps } from '~/utils';
import type { Components } from '~/utils/components-list';

export type ImageProps = HTMLProps['img'];

export type ImageDef = CreateComponent<{
  type: 'img';
  props: ImageProps;
  element: HTMLImageElement;
  component: Components.Image;
  styles: 'root';
  omit: 'children';
}>;
