import type { ReactNode } from 'react';

import type { FlexProps } from '../Box';
import type { IconButtonProps } from '../IconButton';

import type { Components } from '~/defs';
import type { CreateComponent } from '~/utils';

export type CopyableProps = Omit<FlexProps, 'children'> & {
  value: string;
  children?: ReactNode;
  tooltipMessage?: string;
  iconProps?: Partial<IconButtonProps>;
};

export type CopyableDef = CreateComponent<{
  type: 'div';
  component: Components.Copyable;
  props: CopyableProps;
  element: HTMLDivElement;
  styles: 'root' | 'icon';
}>;
