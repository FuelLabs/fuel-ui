import type { Components } from '~/types';
import type { CreateComponent, HTMLProps } from '~/utils';

export type ImageProps = HTMLProps['img'];

export type ImageDef = CreateComponent<{
  type: 'img';
  props: ImageProps;
  element: HTMLImageElement;
  component: Components.Image;
  styles: 'root';
  omit: 'children';
}>;
