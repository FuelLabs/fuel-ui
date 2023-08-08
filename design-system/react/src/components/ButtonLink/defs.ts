import type { CreateComponent, HTMLProps } from '~/utils';
import type { Components } from '~/utils/components-list';

import type { ButtonProps } from '../Button/defs';

type PropsToOmit = 'isLink' | 'variant';

export type ButtonLinkProps = Omit<ButtonProps, PropsToOmit> &
  HTMLProps['a'] & {
    isExternal?: boolean;
  };

export type ButtonLinkDef = CreateComponent<{
  type: 'a';
  element: HTMLAnchorElement;
  component: Components.ButtonLink;
  props: ButtonLinkProps;
  styles: 'root';
  omit: PropsToOmit;
}>;
