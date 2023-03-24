import type { Colors } from '@fuel-ui/css';
import type * as PhosphorIcons from 'phosphor-react';
import type { ReactNode } from 'react';

import type { FlexProps } from '../Flex/types';

import type { Components } from '~/types';
import type { CreateComponent } from '~/utils';

type ToOmit = 'Icon' | 'IconProps' | 'IconWeight' | 'IconContext';
export type Icons = keyof Omit<typeof PhosphorIcons, ToOmit>;

export type IconProps = FlexProps &
  PhosphorIcons.IconProps & {
    icon: Icons | ReactNode;
    wrapperClassName?: string;
    color?: Colors;
    inline?: boolean;
    label?: string;
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
