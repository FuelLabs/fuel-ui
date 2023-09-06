import tsconfigpath from 'vite-tsconfig-paths';
import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    './addon-theme/register.tsx',
  ],
  staticDirs: ['../public'],
  core: {},
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config: any) {
    return mergeConfig(config, {
      plugins: [tsconfigpath()],
      define: {
        __STORYBOOK_FUEL_UI__: '"true"',
      },
    });
  },
};
export default config;
