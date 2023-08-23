import type { LayerIntent, LayerVariant } from '@fuel-ui/css';
import type { AriaButtonProps } from 'react-aria';
import type { CreateComponent } from '~/utils';
import type { Components } from '~/utils/components-list';

import type { HTMLProps, PressProps } from '../../utils/types';
import type { IconProps } from '../Icon';

export type ButtonVariants = 'solid' | 'outlined' | 'ghost' | 'link';
export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg';

export type ButtonBaseProps = {
  size?: ButtonSizes;
  intent?: LayerIntent;
  variant?: LayerVariant;
  iconSize?: number;
  leftIcon?: IconProps['icon'];
  leftIconAriaLabel?: string;
  rightIcon?: IconProps['icon'];
  rightIconAriaLabel?: string;
  isLoading?: boolean;
  loadingText?: string;
  isDisabled?: boolean;
};

export type ButtonProps = Omit<HTMLProps['button'], 'onClick'> &
  AriaButtonProps<'button'> &
  PressProps &
  ButtonBaseProps & {
    justIcon?: boolean;
    isLink?: boolean;
  };

export type ButtonNS = {
  id: string;
};

export type ButtonDef = CreateComponent<{
  type: 'button';
  element: HTMLButtonElement;
  component: Components.Button;
  props: ButtonProps;
  styles: 'root' | 'iconLeft' | 'iconRight';
  namespace: ButtonNS;
}>;
