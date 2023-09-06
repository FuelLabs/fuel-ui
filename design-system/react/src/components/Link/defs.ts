import type { ThemeUtilsCSS } from '@fuel-ui/css';
import type { CreateComponent, HTMLProps } from '~/utils';
import type { Components } from '~/utils/components-list';

import type { IconProps } from '../Icon';

export type LinkProps = HTMLProps['a'] & {
  isExternal?: boolean;
  externalIcon?: IconProps['icon'];
  color?: ThemeUtilsCSS['color'];
};

export type LinkDef = CreateComponent<{
  type: 'a';
  element: HTMLAnchorElement;
  component: Components.Link;
  props: LinkProps;
  styles: 'root';
}>;
