import type { LayerVariant } from '@fuel-ui/css';

import type { BoxProps, FlexProps } from '../Box';

import type { CardBody } from './CardBody';
import type { CardFooter } from './CardFooter';
import type { CardHeader } from './CardHeader';

import type { Components } from '~/defs';
import type { CreateComponent } from '~/utils';

export type CardProps = {
  withDividers?: boolean;
  variant?: Exclude<Exclude<LayerVariant, 'link'>, 'solid'>;
};

type CardNS = {
  id: string;
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
};

export type CardBodyProps = BoxProps;

export type CardFooterProps = FlexProps;

export type CardHeaderProps = FlexProps & {
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
  type: 'div';
  component: Components.CardFooter;
  element: HTMLDivElement;
  props: CardFooterProps;
}>;

export type CardHeaderDef = CreateComponent<{
  type: 'div';
  component: Components.CardHeader;
  element: HTMLDivElement;
  props: CardHeaderProps;
}>;
