import { useMemo } from 'react';

import { PasswordDictionary } from '../utils/constants';
import {
  passwordChecker,
  passwordStrengthCalculator,
} from '../utils/password-strength';

type PasswordStrengthOptions = {
  password: string;
  minLength: number;
  unsafeList: string[];
};

export function usePasswordStrength({
  minLength,
  password,
  unsafeList,
}: PasswordStrengthOptions) {
  const checker = useMemo(
    () => passwordChecker(password, unsafeList, minLength),
    [password, unsafeList, minLength],
  );

  const strength = useMemo(
    () => passwordStrengthCalculator(password, unsafeList, minLength),
    [password, unsafeList, minLength],
  );

  return {
    checker,
    strength,
    label: PasswordDictionary[strength],
  };
}
