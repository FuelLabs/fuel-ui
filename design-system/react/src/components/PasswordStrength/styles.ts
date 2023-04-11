/* eslint-disable no-nested-ternary */
import { cssObj } from '@fuel-ui/css';

import type { PasswordStrength } from './types';

export const styles = {
  heading: cssObj({
    m: '$0',
  }),
  popover: cssObj({
    padding: '$0',
    border: '1px solid transparent',
    outlineColor: 'transparent',
    outline: 'none !important',
  }),
  popoverContainer: cssObj({
    is: ['cardLayer'],
    px: '$3',
    py: '$3',
    maxW: '230px',
    width: '$full',
    flex: 1,
    flexDirection: 'column',
    gap: '$1',

    h5: {
      lineHeight: 1,
      pb: '$2',
    },

    '.fuel_Icon[data-error="false"]': {
      color: '$crimson9',
    },
    '.fuel_Icon[data-error="true"]': {
      color: '$accent9',
    },
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
          : '$accent9',
    }),
  rulesHeader: cssObj({
    color: '$gray12',
    pb: '$1',
  }),
  arrow: cssObj({
    fill: '$overlayBg',
  }),
};
