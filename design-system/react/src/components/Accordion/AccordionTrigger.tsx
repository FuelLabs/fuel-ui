import { cx, styled } from '@fuel-ui/css';
import * as AC from '@radix-ui/react-accordion';

import { createComponent, createStyledElement } from '../../utils';
import { Icon } from '../Icon';

import * as styles from './styles';

export type AccordionTriggerProps = AC.AccordionTriggerProps & {
  className?: string;
};

const Trigger = styled(AC.AccordionTrigger, styles.trigger);

export const AccordionTrigger = createComponent<AccordionTriggerProps>(
  ({ className, children, ...props }) => {
    const classes = cx('fuel_accordion-header', className);
    const iconClass = cx('fuel_accordion-icon', styles.chevron());
    const triggerClass = cx('fuel_accordion-trigger', className);

    return createStyledElement(
      AC.AccordionHeader,
      styles.header,
      null,
      { className: classes },
      <Trigger {...props} className={triggerClass}>
        {children}
        <Icon icon="CaretDown" aria-hidden className={iconClass} />
      </Trigger>
    );
  }
);
