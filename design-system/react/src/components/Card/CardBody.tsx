import { _unstable_createComponent } from '../../utils';
import { Box } from '../Box';

import type { CardBodyDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles } from '~/hooks';

export const CardBody = _unstable_createComponent<CardBodyDef>(
  Components.CardBody,
  ({ children, ...props }) => {
    const classes = useStyles(styles, props);
    const elementProps = { ...props, className: classes.body.className };
    return <Box {...elementProps}>{children}</Box>;
  }
);
