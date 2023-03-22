import type { HTMLProps } from '~/utils';

export type BoxProps = HTMLProps['div'];

export type BoxDef = {
  props: BoxProps;
  styles: 'root';
};
