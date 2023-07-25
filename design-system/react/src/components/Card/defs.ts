import type { LayerVariant } from '@fuel-ui/css';

import type { BoxProps, FlexProps } from '../Box';

import type { CardBody } from './CardBody';
import type { CardFooter } from './CardFooter';
import type { CardHeader } from './CardHeader';

import type { Components } from '~/defs';
import type { CreateComponent, HTMLProps, PressProps } from '~/utils';

export type CardProps = HTMLProps['article'] &
  PressProps & {
    withDividers?: boolean;
    variant?: Exclude<Exclude<LayerVariant, 'link'>, 'solid'>;
  };

type CardNS = {
  id: string;
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
};

export type CardBodyProps = HTMLProps['div'] & BoxProps;
export type CardFooterProps = HTMLProps['footer'] & FlexProps;
export type CardHeaderProps = HTMLProps['header'] &
  FlexProps & {
    space?: 'normal' | 'compact';
  };

export type CardDef = CreateComponent<{
  type: 'div';
  component: Components.Card;
  element: HTMLDivElement;
  props: CardProps;
  namespace: CardNS;
  styles: 'root' | 'body' | 'footer' | 'header';
}>;

export type CardBodyDef = CreateComponent<{
  type: 'div';
  component: Components.CardBody;
  element: HTMLDivElement;
  props: CardBodyProps;
}>;

export type CardFooterDef = CreateComponent<{
  type: 'footer';
  component: Components.CardFooter;
  element: HTMLDivElement;
  props: CardFooterProps;
}>;

export type CardHeaderDef = CreateComponent<{
  type: 'header';
  component: Components.CardHeader;
  element: HTMLDivElement;
  props: CardHeaderProps;
}>;
