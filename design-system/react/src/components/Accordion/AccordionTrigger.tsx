import * as AC from '@radix-ui/react-accordion';
import { createElement } from 'react';

import { createComponent } from '../../utils';
import { Icon } from '../Icon';

import * as styles from './styles';
import type * as t from './types';

import { useComponentProps, useElementProps, useStyles } from '~/hooks';
import { Components } from '~/types';

export const AccordionTrigger = createComponent<t.AccordionTriggerProps>(
  ({ children, ...initProps }) => {
    const props = useComponentProps(Components.AccordionTrigger, initProps);
    const classes = useStyles(styles.triggerStyles, props);
    const triggerElementProps = useElementProps(props, {
      className: classes.header,
    });

    return createElement(
      AC.AccordionHeader,
      { className: classes.header },
      <AC.AccordionTrigger {...triggerElementProps} className={classes.trigger}>
        {children}
        <Icon icon="CaretDown" aria-hidden className={classes.icon} />
      </AC.AccordionTrigger>
    );
  }
);
