import { Icon } from "../Icon";

import type { ListProps } from "./List";
import { List } from "./List";

export default {
  component: List,
  title: "Base/Typography/List",
  argTypes: {},
};

export const Default = (args: ListProps) => (
  <List {...args}>
    <List.Item>First item</List.Item>
    <List.Item>Second item</List.Item>
    <List.Item>Third item</List.Item>
  </List>
);

export const Unordered = (args: ListProps) => (
  <List {...args} type="unordered">
    <List.Item>First item</List.Item>
    <List.Item>Second item</List.Item>
    <List.Item>Third item</List.Item>
  </List>
);

export const Ordered = (args: ListProps) => (
  <List {...args} type="ordered">
    <List.Item>First item</List.Item>
    <List.Item>Second item</List.Item>
    <List.Item>Third item</List.Item>
  </List>
);

export const WithIcon = (args: ListProps) => (
  <List {...args} icon={Icon.is("Check")} iconColor="accent9">
    <List.Item>First item</List.Item>
    <List.Item>Second item</List.Item>
    <List.Item>Third item</List.Item>
  </List>
);
