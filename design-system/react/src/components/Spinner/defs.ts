import type { ColorKeys, Colors } from '@fuel-ui/css';

import type { Components } from '~/defs';
import type { CreateComponent } from '~/utils';

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
