import type { ColorKeys, Colors } from '@fuel-ui/css';
import type { CreateComponent } from '~/utils';
import type { Components } from '~/utils/components-list';

export type SpinnerProps = {
  size?: number;
  color?: Colors | ColorKeys | string;
};

export type SpinnerDef = CreateComponent<{
  type: 'svg';
  props: SpinnerProps;
  element: SVGSVGElement;
  component: Components.Spinner;
  styles: 'root';
  omit: 'as' | 'children';
}>;
