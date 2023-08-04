import { Components } from '~/defs';
import { createStyle, useStyles } from '~/hooks';

import {
  _unstable_createComponent,
  _unstable_createEl,
  createPolymorphicComponent,
} from '../../utils';
import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';

import type * as t from './defs';

const _HelperIcon = _unstable_createComponent<t.HelperIconDef>(
  Components.HelperIcon,
  ({ as = 'div', children, iconSize = 18, ...props }) => {
    const classes = useStyles(styles, props);
    return _unstable_createEl(
      as,
      { ...props, ...classes.root },
      <>
        {children}
        <Tooltip content={props.message}>
          <Icon
            icon="HelpOctagon"
            aria-label="Helper Icon"
            color="textIcon"
            size={iconSize}
          />
        </Tooltip>
      </>,
    );
  },
);

export const HelperIcon =
  createPolymorphicComponent<t.HelperIconDef>(_HelperIcon);

const styles = createStyle(Components.HelperIcon, {
  root: {
    display: 'inline-flex',
    gap: '$2',
  },
});
