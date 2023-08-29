import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';
import { Link } from '../Link';

import type * as t from './defs';
import { styles } from './styles';

export const BreadcrumbLink = _unstable_createComponent<t.BreadcrumbLinkDef>(
  Components.BreadcrumbLink,
  ({ as = Link, ...props }) => {
    const classes = useStyles(styles, props, ['link']);
    const el = _unstable_createEl(as, props);
    return <li className={classes.link.className}>{el}</li>;
  },
);

BreadcrumbLink.id = 'BreadcrumbLink';
