/// <reference types="@fuel-stitches/react" />

import type { ButtonProps } from './components/Button/types';

export enum Components {
  Button = 'Button',
}

export type StoreDefs = {
  Button: {
    props: ButtonProps;
    styles: 'root' | 'iconLeft' | 'iconRight';
  };
};
