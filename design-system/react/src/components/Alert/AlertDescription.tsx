/* eslint-disable @typescript-eslint/naming-convention */
import { createElement } from 'react';

import {
  _unstable_createComponent,
  createPolymorphicComponent,
} from '../../utils';

import type * as t from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

const _AlertDescription = _unstable_createComponent<t.AlertDescriptionDef>(
  Components.AlertDescription,
  ({ as = 'p', ...props }) => {
    const classes = useStyles(styles);
    const elementProps = useElementProps(props, classes.description);
    return createElement(as, elementProps);
  }
);

export const AlertDescription =
  createPolymorphicComponent<t.AlertDescriptionDef>(_AlertDescription);
