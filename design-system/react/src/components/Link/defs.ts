import type { Components } from '~/defs';
import type { CreateComponent, HTMLProps } from '~/utils';

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
