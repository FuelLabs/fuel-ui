/* eslint-disable @typescript-eslint/naming-convention */
import { createElement } from 'react';

import { createComponent2, createPolymorphicComponent } from '../../utils';

import { styles } from './styles';
import type * as t from './types';

import { useElementProps, useStyles } from '~/hooks';
import { Components } from '~/types';

const _AlertDescription = createComponent2<t.AlertDescriptionDef>(
  Components.AlertDescription,
  ({ as = 'p', ...props }) => {
    const classes = useStyles(styles);
    const elementProps = useElementProps(props, classes.description);
    return createElement(as, elementProps);
  }
);

export const AlertDescription =
  createPolymorphicComponent<t.AlertDescriptionDef>(_AlertDescription);
