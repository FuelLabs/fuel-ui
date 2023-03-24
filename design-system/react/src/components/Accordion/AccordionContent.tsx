import * as AC from '@radix-ui/react-accordion';
import { createElement } from 'react';

import { createComponent2 } from '../../utils';

import { styles } from './styles';
import type * as t from './types';

import { useElementProps, useStyles } from '~/hooks';
import { Components } from '~/types';

export const AccordionContent = createComponent2<t.AccordionContentDef>(
  Components.AccordionContent,
  (props) => {
    const classes = useStyles(styles, {}, ['content']);
    const elementProps = useElementProps(props, classes.content);
    return createElement(AC.AccordionContent, elementProps);
  }
);
