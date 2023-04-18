import type { Colors } from '@fuel-ui/css';

import type { Components } from '~/defs';
import type { CreateComponent, HTMLProps } from '~/utils';

export type LinkProps = HTMLProps['a'] & {
  isExternal?: boolean;
  color?: Colors;
};

export type LinkDef = CreateComponent<{
  type: 'a';
  element: HTMLAnchorElement;
  component: Components.Link;
  props: LinkProps;
  styles: 'root';
}>;
