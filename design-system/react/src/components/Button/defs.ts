import type { LayerIntent, LayerVariant } from '@fuel-ui/css';
import type { AriaButtonProps } from 'react-aria';
import type { Components } from '~/defs';
import type { CreateComponent } from '~/utils';

import type { HTMLProps } from '../../utils/types';
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
  ButtonBaseProps & {
    justIcon?: boolean;
    isLink?: boolean;
    /**
     * @deprecated Use onPress instead. onPress support Enter and Space keyboard.
     * You're able to use just one or another, don't use onClick and onPress together
     */
    onClick?: HTMLProps['button']['onClick'];
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
