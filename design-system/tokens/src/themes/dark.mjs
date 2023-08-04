import { createSemantics } from '../definitions/semantics.mjs';
import {
  createIntents,
  createScales,
  createAlphaScales,
} from '../utils/helpers.mjs';

export const dark = {
  ...createSemantics(),
  ...createIntents(),
  ...createScales(),
  ...createAlphaScales(),
};
