import { Components } from '~/defs';
import { useStyles } from '~/hooks';

import type { HTMLProps } from '../../utils';
import {
  createPolymorphicComponent,
  _unstable_createComponent,
  _unstable_createEl,
} from '../../utils';

import type * as t from './defs';
import { styles } from './styles';

export type ContainerSizes = 'sm' | 'md' | 'lg' | 'xl';
export type ContainerProps = HTMLProps['div'] & {
  size?: ContainerSizes;
};

const _Container = _unstable_createComponent<t.ContainerDef>(
  Components.Container,
  ({ as = 'section', ...props }) => {
    const classes = useStyles(styles, props, ['container']);
    return _unstable_createEl(as, { ...props, ...classes.container });
  },
);

export const Container = createPolymorphicComponent<t.ContainerDef>(_Container);
