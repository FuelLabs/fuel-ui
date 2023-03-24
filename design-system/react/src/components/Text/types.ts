import type { Colors, utils } from '@fuel-ui/css';

import type { IconProps } from '../Icon';

import type { Components } from '~/types';
import type { CreateComponent, HTMLProps } from '~/utils';

export type TextProps = HTMLProps['p'] & {
  fontSize?: utils.TextSizes;
  color?: Colors;
  iconSize?: number;
  iconColor?: Colors;
  leftIcon?: IconProps['icon'];
  rightIcon?: IconProps['icon'];
  leftIconAriaLabel?: string;
  rightIconAriaLabel?: string;
};

export type TextDef = CreateComponent<{
  type: 'p';
  element: HTMLParagraphElement;
  component: Components.Text;
  props: TextProps;
  styles: 'root';
}>;
