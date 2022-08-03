import { css } from '@fuel-ui/css';

export const root = css({
  padding: '$4',
  position: 'relative',
  borderRadius: '$md',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$4',
  background: '$gray1',

  '.fuel_alert--content': {
    flex: 1,
    gap: '$3',
  },

  '& .fuel_heading': {
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
        '& .fuel_heading, & .fuel_icon': {
          color: '$blue11',
        },

        '& .fuel_button': {
          p: 0,
          color: '$blue10',
          fontWeight: '$semibold',
        },

        '&:after': {
          background: '$blue11',
        },
      },
      warning: {
        '& .fuel_heading, & .fuel_icon': {
          color: '$amber11',
        },

        '& .fuel_button': {
          p: 0,
          color: '$amber10',
          fontWeight: '$semibold',
        },

        '&:after': {
          background: '$amber11',
        },
      },
      success: {
        '& .fuel_heading, & .fuel_icon': {
          color: '$green11',
        },

        '& .fuel_button': {
          p: 0,
          color: '$green10',
          fontWeight: '$semibold',
        },

        '&:after': {
          background: '$green11',
        },
      },
      error: {
        '& .fuel_heading, & .fuel_icon': {
          color: '$red11',
        },

        '& .fuel_button': {
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
        '.fuel_alert--content': {
          flexDirection: 'column',
        },
        '.fuel_alert--icon': {
          pt: '5px',
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
