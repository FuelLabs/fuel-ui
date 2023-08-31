import type { BNInput } from '@fuel-ts/math';
import type { ComponentProps, ReactNode } from 'react';
import type { Components } from '~/utils/components-list';
import type { CreateComponent } from '~/utils/system';
import type { BaseProps, HTMLProps, Sizes } from '~/utils/types';

import type { Box } from '../Box';
import type { Text } from '../Text';

import type { AssetAmount } from './AssetAmount';
import type { AssetIcon } from './AssetIcon';
import type { AssetName } from './AssetName';
import type { AssetSymbol } from './AssetSymbol';

export type AssetIconSize = Exclude<Sizes, 'xs' | '2xl'>;
export type Assets = 'eth';
export type AssetList = Record<Assets, AssetObj>;

export type AssetObj = {
  name: string;
  symbol: string;
  imageUrl?: string;
};

export type AssetProps = ComponentProps<typeof Box.Stack> & {
  asset: AssetObj;
  amount?: BNInput;
  units?: number;
  precision?: number;
  iconSize?: AssetIconSize | number;
  negative?: boolean;
  hideIcon?: boolean;
};

export type AssetDef = CreateComponent<{
  type: 'div';
  component: Components.Asset;
  props: AssetProps;
  element: HTMLSpanElement;
  styles: 'root' | 'icon' | 'name' | 'symbol' | 'amount';
  namespace: {
    Icon: typeof AssetIcon;
    Name: typeof AssetName;
    Symbol: typeof AssetSymbol;
    Amount: typeof AssetAmount;
  };
}>;

export type AssetIconProps = BaseProps<{ icon?: ReactNode }>;
export type AssetIconDef = CreateComponent<{
  type: 'img';
  omit: 'children';
  component: Components.AssetIcon;
  props: AssetIconProps;
  element: HTMLImageElement;
  namespace: {
    id: string;
  };
}>;

export type AssetNameProps = BaseProps<HTMLProps['span']>;
export type AssetNameDef = CreateComponent<{
  type: 'span';
  omit: 'children';
  component: Components.AssetName;
  props: AssetSymbolProps;
  element: HTMLSpanElement;
  namespace: {
    id: string;
  };
}>;

export type AssetSymbolProps = BaseProps<HTMLProps['span']>;
export type AssetSymbolDef = CreateComponent<{
  type: 'span';
  component: Components.AssetSymbol;
  props: AssetSymbolProps;
  element: HTMLSpanElement;
  namespace: {
    id: string;
  };
}>;

type BaseTextProps = Omit<
  ComponentProps<typeof Text>,
  'leftIcon' | 'rightIcon' | 'iconColor'
>;
export type AssetAmountProps = BaseTextProps;
export type AssetAmountDef = CreateComponent<{
  type: 'span';
  omit: 'children';
  component: Components.AssetAmount;
  props: AssetAmountProps;
  element: HTMLSpanElement;
  namespace: {
    id: string;
  };
}>;
