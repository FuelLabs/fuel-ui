import type * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import type { Components } from '~/defs';
import type { CreateComponent } from '~/utils';

export type AspectRatioProps = AspectRatioPrimitive.AspectRatioProps;
export type AspectRatioDef = CreateComponent<{
  type: 'div';
  component: Components.AspectRatio;
  element: HTMLDivElement;
  props: AspectRatioProps;
  styles: 'root';
  omit: 'as';
}>;
