import { cx } from '@fuel-ui/css';

import { createComponent } from '../../utils';
import type { FlexProps } from '../Flex';
import { Flex } from '../Flex';

import * as styles from './styles';

export const CardHeader = createComponent<FlexProps>(
  ({ children, className, ...props }) => {
    const classes = cx('fuel_card--header', className, styles.header());
    const customProps = { ...props, className: classes };
    return (
      <Flex as="header" {...customProps}>
        {children}
      </Flex>
    );
  }
);
