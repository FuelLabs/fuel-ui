import { allColors } from '@fuel-ui/css';

import type { TextProps } from './Text';
import { Text } from './Text';

export default {
  component: Text,
  title: 'Base/Typography/Text',
  argTypes: {
    color: {
      options: allColors,
      defaultValue: 'accent',
      control: 'select',
    },
  },
};

export const Usage = (args: TextProps) => (
  <Text {...args}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde esse,
    vel ab aperiam est quam iure iusto? Totam eligendi laudantium repellat quasi
    in deserunt laboriosam amet atque? Consectetur, blanditiis?
  </Text>
);

export const WithIcon = (args: TextProps) => (
  <Text {...args} leftIcon="Calendar" leftIconAriaLabel="Calendar">
    Jun 22, 2022
  </Text>
);
