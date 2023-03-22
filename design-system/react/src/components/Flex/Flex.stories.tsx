import { Box } from '../Box';

import { Flex } from './Flex';
import type { FlexProps } from './types';

export default {
  component: Flex,
  title: 'Base/Layout/Flex',
  argTypes: {},
};

export const Usage = (args: FlexProps) => (
  <Flex {...args} gap="$2">
    <Box css={{ background: '$gray7' }}>&nbsp;</Box>
    <Box css={{ background: '$gray7' }}>&nbsp;</Box>
  </Flex>
);
