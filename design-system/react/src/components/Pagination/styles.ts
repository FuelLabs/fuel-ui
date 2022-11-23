import { cssObj } from '@fuel-ui/css';

export const styles = {
  wrapper: cssObj({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  }),
  footer: cssObj({
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  footerNumbers: cssObj({
    display: 'flex',
    gap: '$1',
    flexDirection: 'row',
    alignItems: 'center',
  }),
  footerButton: cssObj({
    cursor: 'pointer',
    width: '$7 !important',
    height: '$7 !important',
    padding: '0px',
    borderRadius: '$md',
    display: 'flex',
    color: '$gray2',
    fontSize: '$xs',
    alignItems: 'cemter',
    fontWeight: '700',
    fontFamily: '$sans',
    bg: '$transparent',
    outline: '0px',
    justifyContent: 'center',
    ':hover': {
      color: '$mint9',
    },
  }),
  separator: cssObj({
    fontWeight: '700',
    fontFamily: '$sans',
    fontSize: '$sm',
    px: '$1',
  }),
  pageButtonWrapper: cssObj({
    border: '1px solid $gray3',
    color: '$gray10',
  }),
  activePage: cssObj({
    color: '$mint9 !important',
  }),
  footerResults: cssObj({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: '$sans',
    fontWeight: '500',
    gap: '$2',
  }),
};
