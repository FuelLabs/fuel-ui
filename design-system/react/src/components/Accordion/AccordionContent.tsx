import * as AC from '@radix-ui/react-accordion';
import { createElement } from 'react';

import { createComponent2 } from '../../utils';

import type * as t from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

export const AccordionContent = createComponent2<t.AccordionContentDef>(
  Components.AccordionContent,
  (props) => {
    const classes = useStyles(styles, {}, ['content']);
    const elementProps = useElementProps(props, classes.content);
    return createElement(AC.AccordionContent, elementProps);
  }
);
