import type { ReactNode } from 'react';

import type { ButtonBaseProps, ButtonProps } from '../Button/defs';

import type { Components } from '~/defs';
import type { CreateComponent } from '~/utils';

export type GroupChildrenProps = {
  childrenProps: ButtonBaseProps;
  children: ReactNode;
};

type PropsToOmit =
  | 'className'
  | 'onClick'
  | 'iconSize'
  | 'leftIcon'
  | 'leftIconAriaLabel'
  | 'rightIcon'
  | 'rightIconAriaLabel'
  | 'isLoading'
  | 'loadingText'
  | 'isDisabled'
  | 'justIcon'
  | 'isLink'
  | 'onPress';
export type ButtonGroupProps = Omit<ButtonProps, PropsToOmit>;

export type ButtonGroupDef = CreateComponent<{
  type: 'div';
  component: Components.ButtonGroup;
  props: ButtonGroupProps;
  element: HTMLDivElement;
  styles: 'root';
  omit: 'as' | 'className' | 'css';
}>;
