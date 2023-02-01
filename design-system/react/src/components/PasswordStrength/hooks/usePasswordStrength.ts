import { useMemo } from 'react';

import type { PasswordDictionary } from '../constants';
import { passwordChecker, passwordStrengthCalculator } from '../utils';

type PasswordStrengthOptions = {
  password: string;
  minLength: number;
  onChangeStrength?: (strength: keyof typeof PasswordDictionary) => void;
};

export function usePasswordStrength({
  minLength,
  password,
  onChangeStrength,
}: PasswordStrengthOptions) {
  const checker = useMemo(
    () => passwordChecker(password, minLength),
    [password, minLength]
  );

  const strength = useMemo(() => {
    const passwordStrength = passwordStrengthCalculator(password, minLength);
    onChangeStrength?.(passwordStrength);

    return passwordStrength;
  }, [password, minLength]);

  return {
    checker,
    strength,
  };
}
