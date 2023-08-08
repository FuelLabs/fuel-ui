import type { ReactElement } from 'react';
import { Children, cloneElement } from 'react';
import { mergeProps } from 'react-aria';
import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';
import { pick } from '../../utils/helpers';
import { Focus } from '../Focus';

import type * as t from './defs';
import { styles } from './styles';

const BUTTON_BASE_PROPS = ['size', 'color', 'variant', 'isDisabled', 'intent'];

const _ButtonGroup = _unstable_createComponent<t.ButtonGroupDef>(
  Components.ButtonGroup,
  ({ as = 'div', children, ...props }) => {
    const classes = useStyles(styles, props);
    const buttons = (Children.toArray(children) as ReactElement[]).map(
      (child: ReactElement) =>
        cloneElement(
          child,
          mergeProps(child.props, pick(BUTTON_BASE_PROPS, props)),
        ),
    );

    const itemProps = { ...props, ...classes.root };
    return _unstable_createEl(
      as,
      itemProps,
      <Focus.ArrowNavigator>{buttons}</Focus.ArrowNavigator>,
    );
  },
);

export const ButtonGroup =
  createPolymorphicComponent<t.ButtonGroupDef>(_ButtonGroup);
