/// <reference types="@storybook/types" />

import type { StoryFn } from "@storybook/react"

import { Stack } from "../Box/Stack"
import { Text } from "../Text"

import { Pagination } from "./Pagination"

export default {
  component: Pagination,
  title: "UI/Pagination",
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["solid", "outlined", "ghost", "link"],
      },
    },
  },
}

const Template: StoryFn<typeof Pagination> = (args) => (
  <Stack>
    <Pagination {...args}>
      <Pagination.Prev />
      <Pagination.Items />
      <Pagination.Next />
    </Pagination>
    <Text css={{ color: "$textMuted" }}>
      Use <code>←</code> and <code>→</code> to focus navigation
    </Text>
  </Stack>
)

export const Usage = Template.bind({})
Usage.args = {
  pagesCount: 10,
}

export const WithAutofocus = Template.bind({})
WithAutofocus.args = {
  pagesCount: 10,
  autoFocus: true,
}

export const PagesToDisplay = Template.bind({})
PagesToDisplay.args = {
  pagesCount: 28,
  pagesToDisplay: 15,
}

export const InitialState = Template.bind({})
InitialState.args = {
  pagesCount: 28,
  pagesToDisplay: 8,
  initialState: {
    currentPage: 14,
  },
}
