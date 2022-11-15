import { passwordStrengthCalculator } from './passwordStrength';

describe('passwordStrength tests', () => {
  it('should calculate as strong', () => {
    expect(passwordStrengthCalculator('12345LF@ik&!')).toBe('strong');
  });

  it('should calculate as average with lowercase/uppercase and special/digits', () => {
    expect(passwordStrengthCalculator('L@w2')).toBe('average');
  });

  it('should calculate as average with lowercase/uppercase and 6+ digits', () => {
    expect(passwordStrengthCalculator('ThisisaTest')).toBe('average');
  });

  it('should calculate as weak', () => {
    expect(passwordStrengthCalculator('12345678')).toBe('weak');
  });
});
