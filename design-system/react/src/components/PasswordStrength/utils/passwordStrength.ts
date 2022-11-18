import type { PasswordStrength } from '../types';

/** @description - This is where we make all the rules for the password checking */
export const passwordChecker = (password: string, minLength: number = 6) => ({
  symbolsAndDigitsChecker:
    /(?=.*[\d])\w+/g.exec(password) !== null &&
    /(?=.[@$!%#?&])\w+/g.exec(password) !== null,
  casingChecker:
    /(?=.*[a-z])\w+/g.exec(password) !== null &&
    /(?=.*[A-Z])\w+/g.exec(password) !== null,
  lengthChecker: password.length >= minLength,
});

/** @description - This will check if the password is weak | strong | average */
export const passwordStrengthCalculator = (
  password: string,
  minLength: number = 6
): PasswordStrength => {
  const { symbolsAndDigitsChecker, casingChecker, lengthChecker } =
    passwordChecker(password, minLength);

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
