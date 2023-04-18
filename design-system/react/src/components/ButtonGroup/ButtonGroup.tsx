import { cx } from '@fuel-ui/css';
import type { ReactElement, ReactNode } from 'react';
import { Children, cloneElement } from 'react';
import { mergeProps } from 'react-aria';

import { createComponent, createStyledElement } from '../../utils';
import { pick } from '../../utils/helpers';
import type { ButtonBaseProps, ButtonProps } from '../Button/defs';
import { Focus } from '../Focus';

import * as styles from './styles';

type GroupChildrenProps = {
  childrenProps: ButtonBaseProps;
  children: ReactNode;
};

function GroupChildren({ children, childrenProps }: GroupChildrenProps) {
  return createStyledElement(
    'div',
    styles.root,
    null,
    { className: cx('fuel_ButtonGroup') },
    (Children.toArray(children) as ReactElement[]).map((child: ReactElement) =>
      cloneElement(child, mergeProps(child.props, childrenProps))
    )
  );
}

const BUTTON_BASE_PROPS = ['size', 'color', 'variant', 'isDisabled'];

export type ButtonGroupProps = Omit<ButtonProps, 'className'>;

export const ButtonGroup = createComponent<ButtonGroupProps>(
  ({ children, ...props }) => (
    <GroupChildren childrenProps={pick(BUTTON_BASE_PROPS, props)}>
      <Focus.ArrowNavigator>{children}</Focus.ArrowNavigator>
    </GroupChildren>
  )
);
