import { createStyle } from '~/hooks';
import { Components } from '~/utils/components-list';

import { containerStyle } from '../Box/styles';

export const styles = createStyle(Components.Nav, {
  root: {
    alignItems: 'center',
    height: '$16',
    ...containerStyle,
  },
  logo: {},
  menu: {},
  menuItem: {
    position: 'relative',
    height: '$16',

    '&[data-active=true]::before': {
      position: 'absolute',
      display: 'block',
      content: '""',
      top: 0,
      left: 0,
      width: '$full',
      height: '2px',
      bg: '$brand',
    },
  },
  spacer: {
    border: '$none',
  },
  connection: {},
  network: {},
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
});
