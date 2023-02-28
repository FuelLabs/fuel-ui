import { cx } from '@fuel-ui/css';

import { createComponent } from '../../utils';
import type { FlexProps } from '../Flex';
import { Flex } from '../Flex';
import { Heading } from '../Heading';

import { useAlertProps } from './Alert';
import * as styles from './styles';

export const AlertTitle = createComponent<FlexProps>(
  ({ children, className, ...props }) => {
    const parentProps = useAlertProps();
    const classes = cx('fuel_alert--title', className, styles.title());
    const customProps = { ...props, className: classes };
    const defaultColor = parentProps?.color ?? null;
    return (
      <Flex as="header" {...customProps}>
        <Heading
          css={{
            color: defaultColor ? `$${defaultColor}!important` : undefined,
          }}
          as="h2"
        >
          {children}
        </Heading>
      </Flex>
    );
  }
);
