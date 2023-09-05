import { createStyle } from '~/hooks';
import { Components } from '~/utils/components-list';

export const styles = createStyle(Components.Nav, {
  logo: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  menu: {
    gap: '$1',
    flexDirection: 'column',
    py: '$3',
    px: '$4',

    '& ~ &': {
      borderTop: '1px solid $border',
    },

    '@lg': {
      px: '$0',
      gap: '$4',
      flexDirection: 'row',

      '& ~ &': {
        borderTop: 'none',
      },
    },
  },
  menuItem: {
    '@lg': {
      position: 'relative',
      height: 'auto',

      '&[data-active=true]::before': {
        position: 'absolute',
        display: 'block',
        content: '""',
        top: -20,
        left: 0,
        width: '$full',
        height: '2px',
        bg: '$brand',
      },
    },
  },
  spacer: {
    '@lg': {
      border: 'none',
    },
  },
  connection: {
    alignItems: 'center',
  },
  network: {
    height: '$8 !important',
  },
  themeToggle: {
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    px: '$2',
    width: '$8',
    height: '$8',
    borderRadius: '$full',
    border: '1px solid $border',

    '[aria-label*="Icon"]': {
      position: 'absolute',
      transition: 'all 0.2s ease',
    },
    '[aria-label*="Sun"]': {
      right: 8,
      color: '$textColor',
    },
    '[aria-label*="MoonStars"]': {
      left: 8,
      color: '$intentsInfo10',
    },

    '&[data-theme="light"]': {
      '[aria-label*="MoonStars"]': {
        transform: 'translateX(100%)',
        visibility: 'hidden',
        opacity: 0,
      },
    },
    '&[data-theme="dark"]': {
      '[aria-label*="Sun"]': {
        transform: 'translateX(-100%)',
        visibility: 'hidden',
        opacity: 0,
      },
    },
  },
  avatar: {},
  desktop: {
    display: 'none',
    gap: '$8',
    maxW: '$2xl',
    margin: '0 auto',
    flexDirection: 'row',
    alignItems: 'center',
    height: '$16',

    '@lg': {
      px: '$14',
      display: 'flex',
    },
  },
  mobile: {
    flexDirection: 'column',
    borderBottom: '1px solid $border',

    '@lg': {
      display: 'none',
    },

    '& .fuel_Nav-logo': {
      flex: 1,
    },
  },
  wrapper: {
    borderBottom: '1px solid $border',
  },
  mobileContent: {
    display: 'flex',
    alignItems: 'center',
    py: '$2',
    px: '$4',
    minH: '60px',
    borderBottom: '1px solid transparent',
    transition: 'border 0.2s ease',

    '&[data-open=true]': {
      borderColor: '$border',
    },
  },
});
