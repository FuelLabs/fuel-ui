import { createStyle } from '~/hooks';
import { Components } from '~/types';

export const styles = createStyle(Components.Alert, {
  root: {
    padding: '$4',
    position: 'relative',
    borderRadius: '$default',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '$4',
    background: '$cardBg',

    '.fuel_Alert-content': {
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
          '.fuel_Alert-content': {
            flexDirection: 'column',
          },
          '.fuel_Alert-icon': {
            pt: '5px',
            alignSelf: 'stretch',
          },
        },
        row: {
          '.fuel_Alert-content': {
            flexDirection: 'row',
          },
          '.fuel_Alert-icon': {
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
  },
  title: {
    display: 'flex',

    '& h3': {
      m: 0,
      fontSize: '$base',
    },
  },
  description: {
    flex: 1,
    margin: 0,
  },
  actions: {
    display: 'flex',
    gap: '$4',
  },
  icon: {},
  content: {},
  button: {},
});
