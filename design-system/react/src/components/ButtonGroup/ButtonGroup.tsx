import type { ReactElement } from 'react';
import { Children, cloneElement, createElement } from 'react';
import { mergeProps } from 'react-aria';

import { _unstable_createComponent } from '../../utils';
import { pick } from '../../utils/helpers';
import { Focus } from '../Focus';

import type * as t from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles, useElementProps } from '~/hooks';

const BUTTON_BASE_PROPS = ['size', 'color', 'variant', 'isDisabled', 'intent'];

export const ButtonGroup = _unstable_createComponent<t.ButtonGroupDef>(
  Components.ButtonGroup,
  ({ children, ...props }) => {
    const classes = useStyles(styles, props);
    const buttons = (Children.toArray(children) as ReactElement[]).map(
      (child: ReactElement) =>
        cloneElement(
          child,
          mergeProps(child.props, pick(BUTTON_BASE_PROPS, props))
        )
    );

    const buttonChildren = (
      <Focus.ArrowNavigator>{buttons}</Focus.ArrowNavigator>
    );

    const wrapperProps = useElementProps(props, classes.root);
    return createElement('div', wrapperProps, buttonChildren);
  }
);
