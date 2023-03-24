import type { FlexProps } from '../Flex';

import type { Components } from '~/types';
import type { CreateComponent } from '~/utils';

export type StackProps = FlexProps;

export type StackDef = CreateComponent<{
  type: 'div';
  props: StackProps;
  element: HTMLDivElement;
  component: Components.Stack;
  styles: 'root';
}>;
