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
    gap: '$2',
    flexDirection: 'row',
    alignItems: 'center',
  }),
  footerButton: cssObj({
    width: '$7',
    height: '$7',
    borderRadius: '$sm',
    display: 'flex',
    alignItems: 'cemter',
    justifyContent: 'center',
  }),
  pageButtonWrapper: cssObj({
    border: '1px solid $gray3',
    color: '$gray3',
  }),
  activePage: cssObj({
    color: '$mint9 !important',
  }),
  footerResults: cssObj({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '$4',
  }),
};
