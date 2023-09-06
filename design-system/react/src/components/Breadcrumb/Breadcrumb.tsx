import { Children } from 'react';
import { useStyles } from '~/hooks';
import { Components } from '~/utils/components-list';

import { _unstable_createComponent, _unstable_createEl } from '../../utils';
import { Icon } from '../Icon';

import { BreadcrumbItem } from './BreadcrumbItem';
import { BreadcrumbLink } from './BreadcrumbLink';
import type * as t from './defs';
import { styles } from './styles';

export const Breadcrumb = _unstable_createComponent<t.BreadcrumbDef>(
  Components.Breadcrumb,
  ({ children, css, gap = '$4', ...props }) => {
    const classes = useStyles(styles, {
      ...props,
      css: { ...css, gap },
    });

    const newChildren = Children.toArray(children).flatMap((child, index) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const id = (child as any)?.type?.id;
      if (id !== 'BreadcrumbItem' && id !== 'BreadcrumbLink') {
        throw new Error(
          'Breadcrumb only accepts Breadcrumb.Item or Breadcrumb.Link as children',
        );
      }

      const count = Children.count(children);
      if (index < count - 1) {
        return [
          child,
          <li key={`icon:${index}`} className="fuel_Breadcrumb-divider">
            <Icon icon="ChevronRight" />
          </li>,
        ];
      }
      return child;
    });
    return _unstable_createEl('ul', { ...props, ...classes.root }, newChildren);
  },
);

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Link = BreadcrumbLink;
