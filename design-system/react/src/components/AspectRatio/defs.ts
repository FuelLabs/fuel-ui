import type * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import type { CreateComponent } from '~/utils';
import type { Components } from '~/utils/components-list';

export type AspectRatioProps = AspectRatioPrimitive.AspectRatioProps;
export type AspectRatioDef = CreateComponent<{
  type: 'div';
  component: Components.AspectRatio;
  element: HTMLDivElement;
  props: AspectRatioProps;
  styles: 'root';
  omit: 'as';
}>;
