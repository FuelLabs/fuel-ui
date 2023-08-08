import type { CreateComponent, HTMLProps } from '~/utils';
import type { Components } from '~/utils/components-list';

export type LinkProps = HTMLProps['a'] & {
  isExternal?: boolean;
};

export type LinkDef = CreateComponent<{
  type: 'a';
  element: HTMLAnchorElement;
  component: Components.Link;
  props: LinkProps;
  styles: 'root';
}>;
