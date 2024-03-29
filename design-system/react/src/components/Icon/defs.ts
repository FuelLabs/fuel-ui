import type { Colors } from '@fuel-ui/css';
import type { IconName } from '@fuel-ui/icons';
import type { ReactNode, SVGProps } from 'react';
import type { CreateComponent } from '~/utils';
import type { Components } from '~/utils/components-list';

export type Icons = IconName;

export type IconProps = {
  icon: Icons | ReactNode;
  wrapperClassName?: string;
  color?: Colors;
  inline?: boolean;
  label?: string;
  size?: number;
  stroke?: number;
  svgProps?: SVGProps<SVGSVGElement>;
};

export type IconDef = CreateComponent<{
  type: 'i';
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
