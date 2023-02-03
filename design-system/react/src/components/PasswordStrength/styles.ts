/* eslint-disable no-nested-ternary */
import { cssObj } from '@fuel-ui/css';

import type { PasswordStrength } from './types';

export const styles = {
  heading: cssObj({
    m: '$0',
  }),
  popover: cssObj({
    px: '$3 !important',
    py: '$2 !important',
    border: '1px solid $gray3',
    outlineColor: 'transparent',
    outline: 'none !important',
  }),
  popoverContainer: cssObj({
    maxW: '230px',
    width: '$full',
    flex: 1,
    flexDirection: 'column',
    background: '$gray2',
    gap: '$1',
  }),
  strengthIndicatorContainer: cssObj({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '$2',
    width: '165px',
    mb: '$2',
  }),
  strengthIndicatorBase: cssObj({
    height: '6px',
    width: '$full',
    borderRadius: '$full',
    backgroundColor: '$gray7',
  }),
  strengthIndicator: (strengthIndicator: PasswordStrength) =>
    cssObj({
      height: '6px',
      width: '$full',
      borderRadius: '$full',
      backgroundColor:
        strengthIndicator === 'weak'
          ? '$crimson9'
          : strengthIndicator === 'average'
          ? '$amber9'
          : '$mint9',
    }),
  rulesHeader: cssObj({ color: '$gray12' }),
  arrow: cssObj({
    fill: '$gray2',
  }),
};
