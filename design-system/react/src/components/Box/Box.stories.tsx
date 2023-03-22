import { Box } from './Box';
import type { BoxProps } from './types';

export default {
  component: Box,
  title: 'Base/Layout/Box',
  argTypes: {},
};

export const Usage = (args: BoxProps) => <Box {...args}>Hello world</Box>;
