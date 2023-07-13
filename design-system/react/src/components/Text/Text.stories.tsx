import { allColors } from '@fuel-ui/css';

import { Icon } from '../Icon';

import { Text } from './Text';
import type { TextProps } from './defs';

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
  <Text
    {...args}
    leftIcon={<Icon icon="Calendar" />}
    leftIconAriaLabel="Calendar"
    iconSize={20}
  >
    Jun 22, 2022
  </Text>
);
