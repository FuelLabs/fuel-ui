import * as AC from '@radix-ui/react-accordion';
import { Components } from '~/defs';
import { useStyles } from '~/hooks';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';

import type * as t from './defs';
import { styles } from './styles';

export const AccordionContent =
  _unstable_createComponent<t.AccordionContentDef>(
    Components.AccordionContent,
    (props) => {
      const classes = useStyles(styles, props, ['content']);
      return _unstable_createEl(AC.AccordionContent, {
        ...props,
        ...classes.content,
      });
    },
  );
