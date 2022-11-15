/* eslint-disable no-nested-ternary */
import { cssObj } from '@fuel-ui/css';

import type { PasswordStrength } from './types';

export const passwordStrengthStyles = {
  strengthIndicatorContainer: cssObj({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '$1',
    width: '165px',
  }),
  strengthIndicatorBase: cssObj({
    height: '5px',
    width: '$full',
    borderRadius: '$full',
    backgroundColor: '$slate7',
  }),
  strengthIndicator: (strengthIndicator: PasswordStrength) =>
    cssObj({
      height: '5px',
      width: '$full',
      borderRadius: '$full',
      backgroundColor:
        strengthIndicator === 'weak'
          ? '$crimson9'
          : strengthIndicator === 'average'
          ? '$amber9'
          : '$mint9',
    }),
};
