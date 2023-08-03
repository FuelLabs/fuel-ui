import type { PasswordStrength } from '../types';

/** @description - This is where we make all the rules for the password checking */
export const passwordChecker = (
  password: string,
  unsafeList: string[],
  minLength: number = 6,
) => {
  const symbolsAndDigitsChecker =
    /(?=.*[\d]).+/g.exec(password) !== null &&
    /(?=.*[_\W]).+/g.exec(password) !== null;
  const casingChecker =
    /(?=.*[a-z]).+/g.exec(password) !== null &&
    /(?=.*[A-Z]).+/g.exec(password) !== null;
  const lengthChecker = password.length >= minLength;
  const commonChecker =
    symbolsAndDigitsChecker &&
    casingChecker &&
    lengthChecker &&
    password?.trim() &&
    !unsafeList.includes(password);

  return {
    lengthChecker,
    casingChecker,
    symbolsAndDigitsChecker,
    commonChecker,
  };
};

/** @description - This will check if the password is weak | strong | average */
export const passwordStrengthCalculator = (
  password: string,
  unsafeList: string[],
  minLength: number = 6,
): PasswordStrength => {
  const {
    symbolsAndDigitsChecker,
    casingChecker,
    lengthChecker,
    commonChecker,
  } = passwordChecker(password, unsafeList, minLength);

  const rulesMatched = [
    lengthChecker,
    casingChecker,
    symbolsAndDigitsChecker,
    commonChecker,
  ].filter((e) => e === true);

  if (rulesMatched.length === 4) {
    return 'strong';
  }

  if (rulesMatched.length < 2) {
    return 'weak';
  }

  return 'average';
};
