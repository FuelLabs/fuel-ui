import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';
import { Button } from '../Button';

import type * as t from './defs';
import { styles } from './styles';

const _AlertButton = _unstable_createComponent<t.AlertButtonDef>(
  Components.AlertButton,
  ({ children, ...props }) => {
    const classes = useStyles(styles, props, ['button']);
    return (
      <Button {...props} {...classes.button} variant="link">
        {children}
      </Button>
    );
  },
);

export const AlertButton =
  createPolymorphicComponent<t.AlertButtonDef>(_AlertButton);

AlertButton.id = 'AlertButton';
