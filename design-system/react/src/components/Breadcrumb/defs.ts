import type { ThemeUtilsCSS } from '@fuel-ui/css';
import type { ReactElement } from 'react';
import type { CreateComponent, HTMLProps } from '~/utils';
import type { Components } from '~/utils/components-list';

import type { LinkProps } from '../Link';

import type { BreadcrumbItem } from './BreadcrumbItem';
import type { BreadcrumbLink } from './BreadcrumbLink';

export type BreadcrumbProps = HTMLProps['ul'] & {
  children: ReactElement<typeof BreadcrumbItem>[];
  gap?: ThemeUtilsCSS['gap'];
};

export type BreadcrumbDef = CreateComponent<{
  type: 'ul';
  omit: 'as';
  component: Components.Breadcrumb;
  props: BreadcrumbProps;
  element: HTMLUListElement;
  styles: 'root' | 'item' | 'link';
  namespace: {
    Item: typeof BreadcrumbItem;
    Link: typeof BreadcrumbLink;
  };
}>;

export type BreadcrumbItemProps = HTMLProps['li'];
export type BreadcrumbItemDef = CreateComponent<{
  type: 'li';
  omit: 'as';
  component: Components.BreadcrumbItem;
  props: BreadcrumbItemProps;
  element: HTMLLIElement;
  namespace: {
    id: string;
  };
}>;

export type BreadcrumbLinkProps = LinkProps;
export type BreadcrumbLinkDef = CreateComponent<{
  type: 'a';
  component: Components.BreadcrumbLink;
  props: BreadcrumbLinkProps;
  element: HTMLLIElement;
  namespace: {
    id: string;
  };
}>;
