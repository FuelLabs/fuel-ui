import { Heading } from "../Heading"
import { Text } from "../Text"

import { Box } from "./Box"
import type {
  BoxCenteredProps,
  BoxProps,
  ContainerProps,
  FlexProps,
  StackProps,
} from "./defs"

export default {
  component: Box,
  title: "Base/Layout/Box",
  argTypes: {},
}

export const Usage = (args: BoxProps) => {
  return <Box {...args}>Hello world</Box>
}

export const Flex = (args: FlexProps) => (
  <Box.Flex {...args} gap="$4">
    <Box css={{ background: "$intentsBase7" }}>&nbsp;</Box>
    <Box css={{ background: "$intentsBase7" }}>&nbsp;</Box>
  </Box.Flex>
)

export const Stack = (args: StackProps) => (
  <Box.Stack {...args}>
    <Box css={{ background: "$intentsBase7" }}>&nbsp;</Box>
    <Box css={{ background: "$intentsBase7" }}>&nbsp;</Box>
    <Box css={{ background: "$intentsBase7" }}>&nbsp;</Box>
    <Box css={{ background: "$intentsBase7" }}>&nbsp;</Box>
  </Box.Stack>
)

export const Centered = (args: BoxCenteredProps) => {
  return <Box.Centered {...args}>Text Centered</Box.Centered>
}
Centered.args = {
  minHS: true,
  minWS: true,
}

export const Container = (args: ContainerProps) => (
  <Box.Container {...args}>
    <Heading>Some Title</Heading>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nemo ullam
      labore libero necessitatibus harum aliquam voluptas at expedita, modi
      laborum dignissimos facere ipsum sed autem pariatur! Repellat, placeat
      illum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nemo
      ullam labore libero necessitatibus harum aliquam voluptas at expedita,
      modi laborum dignissimos facere ipsum sed autem pariatur! Repellat,
      placeat illum.
    </Text>
  </Box.Container>
)
