import { darkTheme, lightTheme, loadIcons, setFuelThemes } from '../src';
import { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { withThemeDecorator } from './addon-theme/decorator';

const preview: Preview = {
  decorators: [withThemeDecorator],
  parameters: {
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Base', 'Form', 'Overlay', 'UI'],
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
