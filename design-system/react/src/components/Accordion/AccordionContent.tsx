import { cx } from '@fuel-ui/css';
import * as AC from '@radix-ui/react-accordion';
import { createElement } from 'react';

import { createComponent } from '../../utils';

import { contentStyles } from './styles';
import type * as t from './types';

import { useComponentProps, useElementProps, useStyles } from '~/hooks';
import { Components } from '~/types';

export const AccordionContent = createComponent<t.AccordionContentProps>(
  (initProps) => {
    const props = useComponentProps(Components.AccordionContent, initProps);
    const classes = useStyles(contentStyles, props);
    const elementProps = useElementProps(props, {
      className: cx(props.className, classes.content),
    });
    return createElement(AC.AccordionContent, elementProps);
  }
);
