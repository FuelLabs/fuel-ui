import { createElement } from 'react';

import { _unstable_createComponent } from '../../utils';

import type * as t from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

export const AlertDialogFooter =
  _unstable_createComponent<t.AlertDialogFooterDef>(
    Components.AlertDialogFooter,
    (props) => {
      const classes = useStyles(styles, props, ['footer']);
      const elementProps = useElementProps(props, classes.footer);
      return createElement('footer', elementProps);
    }
  );
