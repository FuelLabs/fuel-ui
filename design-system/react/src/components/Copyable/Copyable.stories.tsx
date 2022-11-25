import { Copyable } from './Copyable';

export default {
  component: Copyable,
  title: 'Helpers/Copyable',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Usage = () => <Copyable value="Some value">Some value</Copyable>;

Usage.parameters = {
  layout: 'centered',
};

export const WithoutChildren = () => <Copyable value="Some value" />;

WithoutChildren.parameters = {
  layout: 'centered',
};
