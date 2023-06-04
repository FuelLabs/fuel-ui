import { _unstable_createComponent } from '../../utils';
import { Flex } from '../Box/Flex';

import type { CardFooterDef } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useStyles } from '~/hooks';

export const CardFooter = _unstable_createComponent<CardFooterDef>(
  Components.CardFooter,
  ({ children, ...props }) => {
    const classes = useStyles(styles, props, ['footer']);
    const elementProps = { ...props, className: classes.footer.className };
    return (
      <Flex as="footer" {...elementProps}>
        {children}
      </Flex>
    );
  }
);
