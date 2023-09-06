import type { EffectCallback } from 'react';
import { useEffect } from 'react';

export const useEffectOnce = (effect: EffectCallback) => {
  useEffect(effect, []);
};
