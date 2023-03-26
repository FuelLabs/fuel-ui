import { defineConfig } from 'tsup';
import baseConfig from '../../common/config/tsup';

export default defineConfig((options) => ({
  ...baseConfig(options, { withReact: false }),
  entry: ['src/index.ts'],
}));
