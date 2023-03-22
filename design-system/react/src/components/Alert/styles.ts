import { css } from '@fuel-ui/css';

export const root = css({
  padding: '$4',
  position: 'relative',
  borderRadius: '$default',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$4',
  background: '$cardBg',

  '.fuel_AlertContent': {
    flex: 1,
    gap: '$3',
  },

  '& .fuel_Heading': {
    fontWeight: '$bold',
    textSize: 'lg',
    margin: 0,
  },

  '&:after': {
    display: 'block',
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '3px',
    height: '100%',
    borderTopLeftRadius: '$md',
    borderBottomLeftRadius: '$md',
  },

  variants: {
    status: {
      info: {
        '& .fuel_Heading, & .fuel_Icon': {
          color: '$blue11',
        },

        '& .fuel_Button': {
          p: 0,
          color: '$blue10',
          fontWeight: '$semibold',
        },

        '&:after': {
          background: '$blue11',
        },
      },
      warning: {
        '& .fuel_Heading, & .fuel_Icon': {
          color: '$amber11',
        },

        '& .fuel_Button': {
          p: 0,
          color: '$amber10',
          fontWeight: '$semibold',
        },

        '&:after': {
          background: '$amber11',
        },
      },
      success: {
        '& .fuel_Heading, & .fuel_Icon': {
          color: '$green11',
        },

        '& .fuel_Button': {
          p: 0,
          color: '$green10',
          fontWeight: '$semibold',
        },

        '&:after': {
          background: '$green11',
        },
      },
      error: {
        '& .fuel_Heading, & .fuel_Icon': {
          color: '$red11',
        },

        '& .fuel_Button': {
          p: 0,
          color: '$red10',
          fontWeight: '$semibold',
        },

        '&:after': {
          background: '$red11',
        },
      },
    },

    direction: {
      column: {
        '.fuel_AlertContent': {
          flexDirection: 'column',
        },
        '.fuel_AlertIcon': {
          pt: '5px',
          alignSelf: 'stretch',
        },
      },
      row: {
        '.fuel_AlertContent': {
          flexDirection: 'row',
        },
        '.fuel_AlertIcon': {
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
  display: 'flex',

  '& h3': {
    m: 0,
    fontSize: '$base',
  },
});

export const description = css({
  flex: 1,
});

export const actions = css({
  display: 'flex',
  gap: '$4',
});
