import type { ReactNode } from 'react';
import type { CreateComponent } from '~/utils';
import type { Components } from '~/utils/components-list';

import type { ButtonCustomProps, ButtonProps } from '../Button/defs';

export type GroupChildrenProps = {
  childrenProps: ButtonCustomProps;
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
  | 'onClick';

export type ButtonGroupProps = Omit<ButtonProps, PropsToOmit>;

export type ButtonGroupDef = CreateComponent<{
  type: 'div';
  component: Components.ButtonGroup;
  props: ButtonGroupProps;
  element: HTMLDivElement;
  styles: 'root';
  omit: 'className' | 'css';
}>;
