import { Box } from '../Box';

import { Stack } from './Stack';
import type { StackProps } from './types';

export default {
  component: Stack,
  title: 'Base/Layout/Stack',
  argTypes: {},
};

export const Usage = (args: StackProps) => (
  <Stack {...args}>
    <Box css={{ background: '$gray7' }}>&nbsp;</Box>
    <Box css={{ background: '$gray7' }}>&nbsp;</Box>
    <Box css={{ background: '$gray7' }}>&nbsp;</Box>
    <Box css={{ background: '$gray7' }}>&nbsp;</Box>
  </Stack>
);
