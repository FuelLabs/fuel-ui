import type { Components } from '~/types';
import type { CreateComponent, HTMLProps } from '~/utils';

export type BoxProps = HTMLProps['div'];

export type BoxDef = CreateComponent<{
  component: Components.Box;
  type: 'div';
  props: BoxProps;
  element: HTMLDivElement;
  styles: 'root';
}>;
