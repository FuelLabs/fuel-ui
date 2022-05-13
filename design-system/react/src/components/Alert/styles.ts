import { css } from '@fuels-ui/css';

export const root = css({
  p: '$4',
  borderRadius: '$md',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$4',

  '.fuel_alert--content': {
    flex: 1,
    gap: '$3',
  },

  variants: {
    status: {
      info: {
        bg: '$blue4',
        color: '$blue10',
        border: '1px solid $blue5',

        '& .fuel_heading': {
          color: '$blue11',
        },

        '& .fuel_button': {
          p: 0,
          color: '$blue10',
          fontWeight: '$semibold',
        },
      },
      warning: {
        bg: '$amber4',
        color: '$amber11',
        border: '1px solid $amber6',

        '& .fuel_heading': {
          color: '$amber11',
        },

        '& .fuel_button': {
          p: 0,
          color: '$amber10',
          fontWeight: '$semibold',
        },
      },
      success: {
        bg: '$green4',
        color: '$green10',
        border: '1px solid $green5',

        '& .fuel_heading': {
          color: '$green11',
        },

        '& .fuel_button': {
          p: 0,
          color: '$green10',
          fontWeight: '$semibold',
        },
      },
      error: {
        bg: '$red4',
        color: '$red10',
        border: '1px solid $red5',

        '& .fuel_heading': {
          color: '$red11',
        },

        '& .fuel_button': {
          p: 0,
          color: '$red10',
          fontWeight: '$semibold',
        },
      },
    },

    direction: {
      column: {
        '.fuel_alert--content': {
          flexDirection: 'column',
        },
        '.fuel_alert--icon': {
          pt: '1px',
          alignSelf: 'stretch',
        },
      },
      row: {
        '.fuel_alert--content': {
          flexDirection: 'row',
        },
        '.fuel_alert--icon': {
          display: 'flex',
          alignSelf: 'stretch',
          alignItems: 'center',
        },
      },
    },
  },

  defaultVariants: {
    status: 'info',
    direction: 'column',
  },
});

export const title = css({
  '& h3': {
    m: 0,
    fontSize: '$base',
  },
});

export const description = css({
  flex: 1,
});

export const actions = css({
  gap: '$4',
});
