import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '../Heading';
import { Text } from '../Text';

import { Box } from './Box';
import type {
  BoxCenteredProps,
  BoxProps,
  ContainerProps,
  FlexProps,
  HStackProps,
  StackProps,
  VStackProps,
} from './defs';

const meta: Meta<typeof Box> = {
  title: 'Base/Layout/Box',
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Usage: Story = {
  render: (args: BoxProps) => {
    return <Box {...args}>Hello world</Box>;
  },
};

export const Flex: Story = {
  render: (args: FlexProps) => (
    <Box.Flex {...args} gap="$4">
      <Box css={{ background: '$intentsBase7' }}>&nbsp;</Box>
      <Box css={{ background: '$intentsBase7' }}>&nbsp;</Box>
    </Box.Flex>
  ),
};

export const Stack: Story = {
  render: (args: StackProps) => (
    <Box.Stack {...args}>
      <Box css={{ background: '$intentsBase7' }}>&nbsp;</Box>
      <Box css={{ background: '$intentsBase7' }}>&nbsp;</Box>
      <Box css={{ background: '$intentsBase7' }}>&nbsp;</Box>
      <Box css={{ background: '$intentsBase7' }}>&nbsp;</Box>
    </Box.Stack>
  ),
};

export const HStack: Story = {
  name: 'HStack',
  render: (args: HStackProps) => (
    <Box.HStack {...args}>
      <Box css={{ background: '$intentsBase7' }}>&nbsp;</Box>
      <Box css={{ background: '$intentsBase7' }}>&nbsp;</Box>
      <Box css={{ background: '$intentsBase7' }}>&nbsp;</Box>
      <Box css={{ background: '$intentsBase7' }}>&nbsp;</Box>
    </Box.HStack>
  ),
};

export const VStack: Story = {
  name: 'VStack',
  render: (args: VStackProps) => (
    <Box.VStack {...args}>
      <Box css={{ background: '$intentsBase7' }}>&nbsp;</Box>
      <Box css={{ background: '$intentsBase7' }}>&nbsp;</Box>
      <Box css={{ background: '$intentsBase7' }}>&nbsp;</Box>
      <Box css={{ background: '$intentsBase7' }}>&nbsp;</Box>
    </Box.VStack>
  ),
};

export const Centered: Story = {
  render: (args: BoxCenteredProps) => {
    return (
      <Box.Centered {...args} minHS minWS>
        Text Centered
      </Box.Centered>
    );
  },
};

export const Container: Story = {
  render: (args: ContainerProps) => (
    <Box.Container {...args}>
      <Heading>Some Title</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nemo
        ullam labore libero necessitatibus harum aliquam voluptas at expedita,
        modi laborum dignissimos facere ipsum sed autem pariatur! Repellat,
        placeat illum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Vero nemo ullam labore libero necessitatibus harum aliquam voluptas at
        expedita, modi laborum dignissimos facere ipsum sed autem pariatur!
        Repellat, placeat illum.
      </Text>
    </Box.Container>
  ),
};
