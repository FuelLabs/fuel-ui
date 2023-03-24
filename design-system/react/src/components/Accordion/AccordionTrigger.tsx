import * as AC from '@radix-ui/react-accordion';
import { createElement } from 'react';

import { createComponent2 } from '../../utils';
import { Icon } from '../Icon';

import { styles } from './styles';
import type * as t from './types';

import { useElementProps, useStyles } from '~/hooks';
import { Components } from '~/types';

export const AccordionTrigger = createComponent2<t.AccordionTriggerDef>(
  Components.AccordionTrigger,
  ({ children, ...props }) => {
    const classes = useStyles(styles, {}, ['header', 'root', 'icon']);
    const triggerElementProps = useElementProps(props, classes.trigger);

    return createElement(
      AC.AccordionHeader,
      { className: classes.header.className },
      <AC.AccordionTrigger {...triggerElementProps}>
        {children}
        <Icon icon="CaretDown" aria-hidden className={classes.icon.className} />
      </AC.AccordionTrigger>
    );
  }
);
