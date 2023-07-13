import * as mixins from '../mixins';
import type { InputLayer, SemanticLayer } from '../mixins/layers';
import { toCamelCase, layers } from '../mixins/layers';

export type Mixins = keyof typeof mixins;

export const is = (list: Mixins[]) =>
  list.reduce((obj, key) => ({ ...obj, ...mixins[key] }), {});

export const layer = (name: SemanticLayer | InputLayer) => {
  const key = toCamelCase(name);
  return layers[key];
};
