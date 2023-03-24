import { Box } from './Box';
import type {
  BoxCenteredProps,
  BoxProps,
  FlexProps,
  StackProps,
} from './types';

export default {
  component: Box,
  title: 'Base/Layout/Box',
  argTypes: {},
};

export const Usage = (args: BoxProps) => {
  return <Box {...args}>Hello world</Box>;
};

export const Flex = (args: FlexProps) => (
  <Box.Flex {...args} gap="$4">
    <Box css={{ background: '$gray7' }}>&nbsp;</Box>
    <Box css={{ background: '$gray7' }}>&nbsp;</Box>
  </Box.Flex>
);

export const Stack = (args: StackProps) => (
  <Box.Stack {...args}>
    <Box css={{ background: '$gray7' }}>&nbsp;</Box>
    <Box css={{ background: '$gray7' }}>&nbsp;</Box>
    <Box css={{ background: '$gray7' }}>&nbsp;</Box>
    <Box css={{ background: '$gray7' }}>&nbsp;</Box>
  </Box.Stack>
);

export const Centered = (args: BoxCenteredProps) => {
  return <Box.Centered {...args}>Text Centered</Box.Centered>;
};
Centered.args = {
  minHS: true,
  minWS: true,
};
