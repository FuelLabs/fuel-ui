/* eslint-disable @typescript-eslint/naming-convention */
import { createComponent2, createPolymorphicComponent } from '../../utils';
import { Button } from '../Button';

import { styles } from './styles';
import type * as t from './types';

import { useElementProps, useStyles } from '~/hooks';
import { Components } from '~/types';

const _AlertButton = createComponent2<t.AlertButtonDef>(
  Components.AlertButton,
  ({ children, ...props }) => {
    const classes = useStyles(styles);
    const elementProps = useElementProps(props, classes.button);

    return (
      <Button {...elementProps} variant="link">
        {children}
      </Button>
    );
  }
);

export const AlertButton =
  createPolymorphicComponent<t.AlertButtonDef>(_AlertButton);

AlertButton.id = 'AlertButton';
