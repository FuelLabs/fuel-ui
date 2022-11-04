import { cx } from '@fuel-ui/css';
import * as AC from '@radix-ui/react-accordion';

import { createComponent, createStyledElement } from '../../utils';

import * as styles from './styles';

export type AccordionItemProps = AC.AccordionItemProps & {
  className?: string;
};

export const AccordionItem = createComponent<AccordionItemProps>(
  ({ className, children, ...props }) => {
    const classes = cx('fuel_accordion-item', className);
    return createStyledElement(
      AC.AccordionItem,
      styles.item,
      null,
      { ...props, className: classes },
      children
    );
  }
);
