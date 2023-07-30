import unsafePasswords from '../constants/unsafe-passwords.json';

import {
  passwordStrengthCalculator,
  passwordChecker,
} from './passwordStrength';

const strongPassword = '12345LF@ik&!';
const strongPasswordStartingWithSymbol = '!12345LF@ik&';
const averageCharactersAndSymbolsPassword = 'L@w2';
const averageCharactersAndSixDigitsPassword = 'ThisisaTest';
const weakPassword = '123456';
const commonPassword = 'Password1!';
const possibleSymbols = [
  'Qwe123!',
  'Qwe123@',
  'Qwe123#',
  'Qwe123$',
  'Qwe123%',
  'Qwe123^',
  'Qwe123&',
  'Qwe123*',
  'Qwe123(',
  'Qwe123)',
  'Qwe123-',
  'Qwe123_',
  'Qwe123+',
  'Qwe123=',
  'Qwe123[',
  'Qwe123]',
  'Qwe123{',
  'Qwe123}',
  'Qwe123|',
  'Qwe123\\',
  'Qwe123;',
  'Qwe123:',
  "Qwe123'",
  'Qwe123"',
  'Qwe123/',
  'Qwe123?',
  'Qwe123.',
  'Qwe123,',
  'Qwe123<',
  'Qwe123>',
];

describe('passwordChecker', () => {
  it('should validate a strong password correctly', () => {
    const {
      casingChecker,
      lengthChecker,
      symbolsAndDigitsChecker,
      commonChecker,
    } = passwordChecker(strongPassword, unsafePasswords);

    expect(casingChecker).toBeTruthy();
    expect(lengthChecker).toBeTruthy();
    expect(symbolsAndDigitsChecker).toBeTruthy();
    expect(commonChecker).toBeTruthy();
  });

  it('should validate a strong password starting with a symbol correctly', () => {
    const {
      casingChecker,
      lengthChecker,
      symbolsAndDigitsChecker,
      commonChecker,
    } = passwordChecker(strongPasswordStartingWithSymbol, unsafePasswords);

    expect(casingChecker).toBeTruthy();
    expect(lengthChecker).toBeTruthy();
    expect(symbolsAndDigitsChecker).toBeTruthy();
    expect(commonChecker).toBeTruthy();
  });

  it('should validate an average password with lowercase/uppercase and symbols/digits correctly', () => {
    const {
      casingChecker,
      lengthChecker,
      symbolsAndDigitsChecker,
      commonChecker,
    } = passwordChecker(averageCharactersAndSymbolsPassword, unsafePasswords);

    expect(casingChecker).toBeTruthy();
    expect(lengthChecker).toBeFalsy();
    expect(symbolsAndDigitsChecker).toBeTruthy();
    expect(commonChecker).toBeFalsy();
  });

  it('should validate an average password with lowercase/uppercase and 6+ digits correctly', () => {
    const {
      casingChecker,
      lengthChecker,
      symbolsAndDigitsChecker,
      commonChecker,
    } = passwordChecker(averageCharactersAndSixDigitsPassword, unsafePasswords);

    expect(casingChecker).toBeTruthy();
    expect(lengthChecker).toBeTruthy();
    expect(symbolsAndDigitsChecker).toBeFalsy();
    expect(commonChecker).toBeFalsy();
  });

  it('should validate a weak password correctly', () => {
    const {
      casingChecker,
      lengthChecker,
      symbolsAndDigitsChecker,
      commonChecker,
    } = passwordChecker(weakPassword, unsafePasswords);

    expect(casingChecker).toBeFalsy();
    expect(lengthChecker).toBeTruthy();
    expect(symbolsAndDigitsChecker).toBeFalsy();
    expect(commonChecker).toBeFalsy();
  });

  it('should validate a common password correctly', () => {
    const {
      casingChecker,
      lengthChecker,
      symbolsAndDigitsChecker,
      commonChecker,
    } = passwordChecker(commonPassword, unsafePasswords);

    expect(casingChecker).toBeTruthy();
    expect(lengthChecker).toBeTruthy();
    expect(symbolsAndDigitsChecker).toBeTruthy();
    expect(commonChecker).toBeFalsy();
  });

  it('should be falsy for every rule if minimun length is 8', () => {
    const {
      casingChecker,
      lengthChecker,
      symbolsAndDigitsChecker,
      commonChecker,
    } = passwordChecker(weakPassword, unsafePasswords, 8);

    expect(casingChecker).toBeFalsy();
    expect(lengthChecker).toBeFalsy();
    expect(symbolsAndDigitsChecker).toBeFalsy();
    expect(commonChecker).toBeFalsy();
  });
});

it('should be falsy for every rule if empty pass is provided', () => {
  const {
    casingChecker,
    lengthChecker,
    symbolsAndDigitsChecker,
    commonChecker,
  } = passwordChecker(' ', unsafePasswords, 8);

  expect(casingChecker).toBeFalsy();
  expect(lengthChecker).toBeFalsy();
  expect(symbolsAndDigitsChecker).toBeFalsy();
  expect(commonChecker).toBeFalsy();
});

it.each(possibleSymbols)(
  'should symbol checker be true for every possible symbol',
  (passSymbol) => {
    const { symbolsAndDigitsChecker } = passwordChecker(
      passSymbol,
      unsafePasswords
    );

    expect(symbolsAndDigitsChecker).toBeTruthy();
  }
);

describe('passwordStrength tests', () => {
  it('should calculate as strong', () => {
    expect(passwordStrengthCalculator(strongPassword, unsafePasswords)).toBe(
      'strong'
    );
  });

  it('should calculate as average with lowercase/uppercase and symbols/digits', () => {
    expect(
      passwordStrengthCalculator(
        averageCharactersAndSymbolsPassword,
        unsafePasswords
      )
    ).toBe('average');
  });

  it('should calculate as average with lowercase/uppercase and 6+ digits', () => {
    expect(
      passwordStrengthCalculator(
        averageCharactersAndSixDigitsPassword,
        unsafePasswords
      )
    ).toBe('average');
  });

  it('should calculate as weak', () => {
    expect(passwordStrengthCalculator(weakPassword, unsafePasswords)).toBe(
      'weak'
    );
  });
});
