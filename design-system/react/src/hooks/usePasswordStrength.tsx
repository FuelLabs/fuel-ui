import { useEffect, useMemo, useState } from 'react';

import { PasswordDictionary } from '../utils/constants';
import {
  passwordChecker,
  passwordStrengthCalculator,
} from '../utils/password-strength';

type PasswordStrengthOptions = {
  password: string;
  minLength: number;
};

export function usePasswordStrength({
  minLength,
  password,
}: PasswordStrengthOptions) {
  const [loading, setLoading] = useState(true);
  const [unsafeList, setUnsafeList] = useState<string[]>([]);

  const checker = useMemo(
    () => passwordChecker(password, unsafeList, minLength),
    [password, unsafeList, minLength],
  );

  const strength = useMemo(
    () => passwordStrengthCalculator(password, unsafeList, minLength),
    [password, unsafeList, minLength],
  );

  useEffect(() => {
    import('../utils/unsafe-passwords.json').then((res) => {
      setUnsafeList(res.default);
      setLoading(false);
    });
  }, []);

  return {
    loading,
    checker,
    strength,
    label: PasswordDictionary[strength],
  };
}
