import * as AC from '@radix-ui/react-accordion';
import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';
import { Icon } from '../Icon';

import type * as t from './defs';
import { styles } from './styles';

export const AccordionTrigger =
  _unstable_createComponent<t.AccordionTriggerDef>(
    Components.AccordionTrigger,
    ({ children, ...props }) => {
      const classes = useStyles(styles, props, ['header', 'icon', 'trigger']);
      return _unstable_createEl(
        AC.AccordionHeader,
        classes.header,
        <AC.AccordionTrigger {...{ ...props, ...classes.trigger }}>
          {children}
          <Icon
            icon="ChevronDown"
            aria-hidden
            className={classes.icon.className}
          />
        </AC.AccordionTrigger>,
      );
    },
  );
