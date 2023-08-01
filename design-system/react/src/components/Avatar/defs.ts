import type * as RAvatar from '@radix-ui/react-avatar';
import type { Components } from '~/defs';
import type { CreateComponent } from '~/utils';

import type { AvatarGenerated } from './AvatarGenerated';

export type AvatarProps = RAvatar.AvatarImageProps & {
  name: string;
  fallback?: string;
  size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
};

export type AvatarDef = CreateComponent<{
  type: 'img';
  component: Components.Avatar;
  props: AvatarProps;
  element: HTMLImageElement;
  omit: 'as' | 'children';
  styles: 'root' | 'image' | 'fallback' | 'generated';
  namespace: {
    Generated: typeof AvatarGenerated;
  };
}>;

export type AvatarGeneratedProps = Omit<AvatarProps, 'name'> & {
  hash: string;
};

export type AvatarGeneratedDef = CreateComponent<{
  type: 'div';
  component: Components.AvatarGenerated;
  props: AvatarGeneratedProps;
  element: HTMLDivElement;
  omit: 'children';
}>;
