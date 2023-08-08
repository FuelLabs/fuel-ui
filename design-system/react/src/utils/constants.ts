import type { PasswordStrength } from './types';

export const PasswordDictionary = {
  strong: 'Strong',
  average: 'Average',
  weak: 'Weak',
} as Record<PasswordStrength, string>;
