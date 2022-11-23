import { validatePageNumber } from './validatePageNumber';

describe('validatePageNumber', () => {
  it('should return false for a decimal number', () => {
    expect(validatePageNumber(0.3)).toBeFalsy();
  });

  it('should return false for a negative number', () => {
    expect(validatePageNumber(-1)).toBeFalsy();
  });

  it('should return true for any integer number', () => {
    expect(validatePageNumber(10)).toBeTruthy();
  });
});
