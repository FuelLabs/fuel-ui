import { useState } from "react"

import { Box } from "../Box"
import { Stack } from "../Box/Stack"
import { Button } from "../Button"
import { Heading } from "../Heading"
import { Text } from "../Text"

import type { PopoverProps } from "./Popover"
import { Popover } from "./Popover"

export default {
  component: Popover,
  title: "Overlay/Popover",
  parameters: {
    layout: "fullscreen",
  },
}

const popoverContent = (
  <Box css={{ maxW: "200px" }}>
    <Heading as="h5" css={{ m: "$0", mb: "$2" }}>
      Some title
    </Heading>
    <Text css={{ m: "$0", color: "$intentsBase10" }} fontSize="sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nemo ullam
      labore libero necessitatibus harum aliquam voluptas at expedita
    </Text>
  </Box>
)

export const Usage = (args: PopoverProps) => (
  <Popover {...args} content={popoverContent} showCloseButton>
    <Button>Click here</Button>
  </Popover>
)
Usage.parameters = {
  layout: "centered",
}

export const CustomOffset = (args: PopoverProps) => (
  <Popover
    {...args}
    content={popoverContent}
    showCloseButton
    contentProps={{ arrowPadding: 20 }}
    align="start"
    side="top"
  >
    <Button>Click here</Button>
  </Popover>
)
CustomOffset.parameters = {
  layout: "centered",
}

export const Controlled = (args: PopoverProps) => {
  const [opened, setOpened] = useState(false)
  return (
    <Stack gap="$2" direction="row">
      <Button onPress={() => setOpened(true)}>Open</Button>
      <Popover
        {...args}
        content={popoverContent}
        showCloseButton
        open={opened}
        onOpenChange={setOpened}
      >
        <Button variant="ghost">Click here</Button>
      </Popover>
    </Stack>
  )
}

Controlled.parameters = {
  layout: "centered",
}
