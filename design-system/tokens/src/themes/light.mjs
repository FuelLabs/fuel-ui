import { createSemantics } from '../definitions/semantics.mjs';
import {
  createIntents,
  createScales,
  createAlphaScales,
} from '../utils/helpers.mjs';

export const light = {
  ...createSemantics(true),
  ...createIntents(),
  ...createScales(true),
  ...createAlphaScales(true),
};
