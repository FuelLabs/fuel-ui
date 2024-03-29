import type { ReactNode } from 'react';
import type { CreateComponent } from '~/utils';
import type { Components } from '~/utils/components-list';

import type { FlexProps } from '../Box';
import type { IconButtonProps } from '../IconButton';

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
