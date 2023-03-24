import { createElement } from 'react';

import { createComponent2 } from '../../utils';
import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';

import type * as t from './types';

import { createStyle, useElementProps, useStyles } from '~/hooks';
import { Components } from '~/types';

export const HelperIcon = createComponent2<t.HelperIconDef>(
  Components.HelperIcon,
  ({ as = 'div', children, ...props }) => {
    const classes = useStyles(styles, props);
    const elementProps = useElementProps(props, classes.root);
    return createElement(
      as,
      elementProps,
      <>
        {children}
        <Tooltip content={props.message}>
          <Icon icon="Question" aria-label="Helper Icon" />
        </Tooltip>
      </>
    );
  }
);

const styles = createStyle(Components.HelperIcon, {
  root: {
    display: 'inline-flex',
    gap: '$2',
  },
});
