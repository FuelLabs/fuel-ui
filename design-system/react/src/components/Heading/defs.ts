import type { utils, Colors } from '@fuel-ui/css';

import type { IconProps } from '../Icon';

import type { Components } from '~/defs';
import type { CreateComponent, HTMLProps } from '~/utils';

export type HeadingProps = HTMLProps['h1'] & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | string;
  fontSize?: utils.TextSizes;
  fontColor?: Colors;
  iconSize?: number;
  iconColor?: Colors;
  leftIcon?: IconProps['icon'];
  rightIcon?: IconProps['icon'];
  leftIconAriaLabel?: string;
  rightIconAriaLabel?: string;
};

export type HeadingDef = CreateComponent<{
  type: 'h3';
  props: HeadingProps;
  element: HTMLHeadingElement;
  component: Components.Heading;
  styles: 'root';
}>;
