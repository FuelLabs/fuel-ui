import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Stack } from '../Stack';
import { Text } from '../Text';

import { Pagination } from './Pagination';

export default {
  component: Pagination,
  title: 'UI/Pagination',
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['solid', 'outlined', 'ghost', 'link'],
      },
    },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Stack>
    <Pagination {...args}>
      <Pagination.Prev />
      <Pagination.Items />
      <Pagination.Next />
    </Pagination>
    <Text css={{ color: '$gray8' }}>
      Use <code>←</code> and <code>→</code> to focus navigation
    </Text>
  </Stack>
);

export const Usage = Template.bind({});
Usage.args = {
  pagesCount: 10,
};

export const WithAutofocus = Template.bind({});
WithAutofocus.args = {
  pagesCount: 10,
  autoFocus: true,
};

export const PagesToDisplay = Template.bind({});
PagesToDisplay.args = {
  pagesCount: 28,
  pagesToDisplay: 15,
};
