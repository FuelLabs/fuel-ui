import { _unstable_createComponent } from '../../utils';
import { Flex } from '../Box/Flex';

import type { CardHeaderDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles } from '~/hooks';

export const CardHeader = _unstable_createComponent<CardHeaderDef>(
  Components.CardHeader,
  ({ children, space = 'normal', ...props }) => {
    const classes = useStyles(styles, props);
    const elementProps = { ...props, className: classes.header.className };
    return (
      <Flex as="header" {...elementProps} data-space={space}>
        {children}
      </Flex>
    );
  }
);
