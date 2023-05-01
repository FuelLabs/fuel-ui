/* eslint-disable import/no-relative-packages */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'tsup';

import baseConfig from '../../common/config/tsup';

export default defineConfig((options) => ({
  ...baseConfig(options, { withReact: true }),
  entry: ['src/index.tsx'],
  noExternal: ['@fuel-stitches/react'],
}));
