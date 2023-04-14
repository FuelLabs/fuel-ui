import { cx } from '@fuel-ui/css';

import { createComponent } from '../../utils';
import type { FlexProps } from '../Box/Flex';
import { Flex } from '../Box/Flex';

import * as styles from './styles';

export const CardFooter = createComponent<FlexProps>(
  ({ children, className, ...props }) => {
    const classes = cx('fuel_CardFooter', className, styles.footer());
    const customProps = { ...props, className: classes };
    return (
      <Flex as="footer" {...customProps}>
        {children}
      </Flex>
    );
  }
);
