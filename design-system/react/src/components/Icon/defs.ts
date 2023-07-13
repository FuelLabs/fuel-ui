import type { Colors } from '@fuel-ui/css';
import type * as TablerIcons from '@tabler/icons-react';
import type { ReactNode } from 'react';
import type { Components } from '~/defs';
import type { CreateComponent } from '~/utils';

import type { FlexProps } from '../Box/defs';

type ToOmit = 'createReactComponent';
type WithoutIconPrefix<T extends string> = T extends `Icon${infer S}`
  ? S
  : never;

export type Icons = WithoutIconPrefix<keyof Omit<typeof TablerIcons, ToOmit>>;

export type IconProps = FlexProps & {
  icon: Icons | ReactNode;
  wrapperClassName?: string;
  color?: Colors;
  inline?: boolean;
  label?: string;
  size?: number;
  stroke?: number;
};

export type IconDef = CreateComponent<{
  type: 'div';
  props: IconProps;
  element: HTMLDivElement;
  component: Components.Icon;
  styles: 'root';
  omit: 'children';
  namespace: {
    is: (icon: Icons) => Icons;
    iconList: Icons[];
    id: string;
  };
}>;
