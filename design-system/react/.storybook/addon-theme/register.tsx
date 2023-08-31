import React from 'react';
import { addons, types } from '@storybook/addons';
import { IconButton, Icons } from '@storybook/components';
import { useAddonState } from '@storybook/manager-api';

const ADDON_ID = 'theme-addon';
const TOOL_ID = `${ADDON_ID}/tool`;

import { create } from '@storybook/theming/create';
import { themes } from '@storybook/theming';

const THEME_KEY = 'fuel-ui-theme';
const PRIMARY_COLOR = '#00E182';
const LOGO =
  'https://assets-global.website-files.com/62e273f312d561347ce33306/6400d0b82c501d62b75963ff_Fuel%20New.png';

const baseTheme = create({
  base: 'dark',
  brandTitle: 'Fuel',
  brandUrl: 'https://fuel.sh',
  brandImage: LOGO,
  colorPrimary: PRIMARY_COLOR,
  colorSecondary: PRIMARY_COLOR,
  barSelectedColor: PRIMARY_COLOR,

  fontBase:
    '"PxGrotesk", system-ui, -apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",sans-serif',
  fontCode:
    '"PxGrotesk Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
});

const light = {
  ...themes.light,
  ...baseTheme,
};
const dark = {
  ...themes.dark,
  ...baseTheme,
  appBg: '#101010',
  barBg: '#151515',
};

addons.register(ADDON_ID, (api) => {
  addons.add(TOOL_ID, {
    title: 'Toggle theme',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
    render: () => {
      const current = localStorage.getItem(THEME_KEY);
      const [state, setState] = useAddonState(ADDON_ID, current);
      const isDark = state === 'dark';

      React.useEffect(() => {
        localStorage.setItem(THEME_KEY, state as any);
        api.setOptions({ theme: isDark ? dark : light });
      }, [state]);

      React.useEffect(() => {
        function listener() {
          setState(localStorage.getItem(THEME_KEY));
        }
        window.addEventListener('storage', listener);
        return () => {
          window.removeEventListener('storage', listener);
        };
      }, []);

      return (
        <IconButton
          key="theme"
          title="Toggle theme"
          onClick={() => {
            setState(current === 'light' ? 'dark' : 'light');
          }}
        >
          <Icons icon={isDark ? 'moon' : 'sun'} />
        </IconButton>
      );
    },
  });
});
