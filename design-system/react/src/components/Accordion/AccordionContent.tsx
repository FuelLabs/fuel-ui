import { cx } from '@fuel-ui/css';
import * as AC from '@radix-ui/react-accordion';

import { createComponent, createStyledElement } from '../../utils';
import { Box } from '../Box';

import * as styles from './styles';

export type AccordionContentProps = AC.AccordionContentProps & {
  className?: string;
};

export const AccordionContent = createComponent<AccordionContentProps>(
  ({ className, children, ...props }) => {
    const classes = cx('fuel_AccordionContent', className);
    return createStyledElement(
      AC.AccordionContent,
      styles.content,
      null,
      { ...props, className: classes },
      <Box css={{ p: '$4' }}>{children}</Box>
    );
  }
);
