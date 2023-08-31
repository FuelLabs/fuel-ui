import { darkTheme, lightTheme, loadIcons, setFuelThemes } from '../src';
import { Preview } from '@storybook/react';
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
  },
};

export default preview;
