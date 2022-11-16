import type { PasswordStrength } from '../types';

/** @description - This is where we make all the rules for the password checking */
export const passwordChecker = (password: string) => ({
  symbolsAndDigitsChecker:
    /(?=.*[\d])\w+/g.exec(password) !== null &&
    /(?=.[@$!%#?&])\w+/g.exec(password) !== null,
  casingChecker:
    /(?=.*[a-z])\w+/g.exec(password) !== null &&
    /(?=.*[A-Z])\w+/g.exec(password) !== null,
  lengthChecker: password.length >= 6,
});

/** @description - This will check if the password is weak | strong | average */
export const passwordStrengthCalculator = (
  password: string
): PasswordStrength => {
  const { symbolsAndDigitsChecker, casingChecker, lengthChecker } =
    passwordChecker(password);

  const rulesMatched = [
    lengthChecker,
    casingChecker,
    symbolsAndDigitsChecker,
  ].filter((e) => e === true);

  if (rulesMatched.length === 3) {
    return 'strong';
  }

  if (rulesMatched.length === 2) {
    return 'average';
  }

  return 'weak';
};
