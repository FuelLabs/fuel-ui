import type { PasswordStrength } from '../types';

/** @description - This is where we make all the rules for the password checking */
export const passwordChecker = (password: string) => ({
  digits: /(?=.*[\d])\w+/g.test(password),
  lowerCase: /(?=.*[a-z])\w+/g.test(password),
  upperCase: /(?=.*[A-Z])\w+/g.test(password),
  specialSymbols: /(?=.[@$!%#?&])\w+/g.test(password),
  lengthChecker: password.length > 6,
});

/** @description - This will check if the password is weak | strong | average */
export const passwordStrengthCalculator = (
  password: string
): PasswordStrength => {
  const { digits, lengthChecker, lowerCase, specialSymbols, upperCase } =
    passwordChecker(password);

  const matchesLength = lengthChecker;
  const matchesCasing = lowerCase && upperCase;
  const matchesNumbersAndSymbols = specialSymbols && digits;

  const rulesMatched = [
    matchesLength,
    matchesCasing,
    matchesNumbersAndSymbols,
  ].filter((e) => e !== true);

  if (rulesMatched.length === 3) {
    return 'strong';
  }

  if (rulesMatched.length === 2) {
    return 'average';
  }

  return 'weak';
};
