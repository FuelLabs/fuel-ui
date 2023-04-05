import tsconfigpath from 'vite-tsconfig-paths';
import { mergeConfig } from 'vite';

const config = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    'storybook-dark-mode',
  ],
  staticDirs: ['../public'],
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: {
    name: '@storybook/react-vite',
  },
  async viteFinal(config: any) {
    return mergeConfig(config, {
      plugins: [tsconfigpath()],
    });
  },
};

export default config;
