import { css } from '@fuel-ui/css';
import type { Colors } from '@fuel-ui/css';

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
        '& .fuel_heading, & .fuel_icon': {
          color: `${({ color = 'blue11' }: { color?: Colors }) => color})`,
        },

        '& .fuel_button': {
          p: 0,
          color: `${({ color = 'yellow10' }: { color?: Colors }) => color})`,
          fontWeight: '$semibold',
        },

        '&:after': {
          background: ({ color = 'blue11' }: { color?: Colors }) => color,
        },
      },
      warning: {
        '& .fuel_heading, & .fuel_icon': {
          color: ({ color }: { color?: Colors }) => color || '$amber11',
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
          color: ({ color = 'green11' }: { color?: Colors }) => color,
        },

        '& .fuel_button': {
          p: 0,
          color: ({ color = 'green10' }: { color?: Colors }) => color,
          fontWeight: '$semibold',
        },

        '&:after': {
          background: ({ color = 'green11' }: { color?: Colors }) => color,
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
