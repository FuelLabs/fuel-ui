import {
  passwordStrengthCalculator,
  passwordChecker,
} from './passwordStrength';

const strongPassword = '12345LF@ik&!';
const averageCharactersAndSymbolsPassword = 'L@w2';
const averageCharactersAndSixDigitsPassword = 'ThisisaTest';
const weakPassword = '12345678';

describe('passwordChecker', () => {
  it('should validate a strong password correctly', () => {
    const { casingChecker, lengthChecker, symbolsAndDigitsChecker } =
      passwordChecker(strongPassword);

    expect(casingChecker).toBeTruthy();
    expect(lengthChecker).toBeTruthy();
    expect(symbolsAndDigitsChecker).toBeTruthy();
  });

  it('should validate an average password with lowercase/uppercase and symbols/digits correctly', () => {
    const { casingChecker, lengthChecker, symbolsAndDigitsChecker } =
      passwordChecker(averageCharactersAndSymbolsPassword);

    expect(casingChecker).toBeTruthy();
    expect(lengthChecker).toBeFalsy();
    expect(symbolsAndDigitsChecker).toBeTruthy();
  });

  it('should validate an average password with lowercase/uppercase and 6+ digits correctly', () => {
    const { casingChecker, lengthChecker, symbolsAndDigitsChecker } =
      passwordChecker(averageCharactersAndSixDigitsPassword);

    expect(casingChecker).toBeTruthy();
    expect(lengthChecker).toBeTruthy();
    expect(symbolsAndDigitsChecker).toBeFalsy();
  });

  it('should validate a weak password correctly', () => {
    const { casingChecker, lengthChecker, symbolsAndDigitsChecker } =
      passwordChecker(weakPassword);

    expect(casingChecker).toBeFalsy();
    expect(lengthChecker).toBeTruthy();
    expect(symbolsAndDigitsChecker).toBeFalsy();
  });
});

describe('passwordStrength tests', () => {
  it('should calculate as strong', () => {
    expect(passwordStrengthCalculator(strongPassword)).toBe('strong');
  });

  it('should calculate as average with lowercase/uppercase and symbols/digits', () => {
    expect(
      passwordStrengthCalculator(averageCharactersAndSymbolsPassword)
    ).toBe('average');
  });

  it('should calculate as average with lowercase/uppercase and 6+ digits', () => {
    expect(
      passwordStrengthCalculator(averageCharactersAndSixDigitsPassword)
    ).toBe('average');
  });

  it('should calculate as weak', () => {
    expect(passwordStrengthCalculator(weakPassword)).toBe('weak');
  });
});
