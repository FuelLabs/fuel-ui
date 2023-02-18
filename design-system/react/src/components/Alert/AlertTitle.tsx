import { cx } from '@fuel-ui/css';

import { createComponent } from '../../utils';
import type { FlexProps } from '../Flex';
import { Flex } from '../Flex';
import { Heading } from '../Heading';

import * as styles from './styles';

export const AlertTitle = createComponent<FlexProps>(
  ({ as = 'header', css, children, className, ...props }) => {
    const classes = cx('fuel_AlertTitle', className, styles.title({ css }));
    const customProps = { ...props, className: classes };
    return (
      <Flex as={as} {...customProps}>
        <Heading as="h2">{children}</Heading>
      </Flex>
    );
  }
);
