import { createFrom } from './helpers.mjs';

export function createIntents() {
  return {
    intents: {
      base: createFrom('scales.gray'),
      primary: createFrom('scales.green'),
      secondary: createFrom('scales.red'),
      info: createFrom('scales.blue'),
      warning: createFrom('scales.yellow'),
      success: createFrom('scales.green'),
      error: createFrom('scales.red'),
    },
  };
}
