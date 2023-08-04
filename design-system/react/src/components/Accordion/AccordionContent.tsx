import * as AC from '@radix-ui/react-accordion';
import { createElement } from 'react';
import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

import { _unstable_createComponent } from '../../utils';

import type * as t from './defs';
import { styles } from './styles';

export const AccordionContent =
  _unstable_createComponent<t.AccordionContentDef>(
    Components.AccordionContent,
    (props) => {
      const classes = useStyles(styles, props, ['content']);
      const elementProps = useElementProps(props, classes.content);
      return createElement(AC.AccordionContent, elementProps);
    },
  );
