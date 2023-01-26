import type { ComponentMeta, ComponentStory } from '@storybook/react';

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
  <Pagination {...args}>
    <Pagination.Prev />
    <Pagination.Items />
    <Pagination.Next />
  </Pagination>
);

export const Usage = Template.bind({});
Usage.args = {
  pagesCount: 10,
};

export const PagesToDisplay = Template.bind({});
PagesToDisplay.args = {
  pagesCount: 28,
  pagesToDisplay: 7,
};
