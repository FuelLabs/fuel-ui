import { Flex } from '../Box/Flex';
import { Link } from '../Link';
import { Text } from '../Text';

import { Icon } from './Icon';
import type { IconProps } from './defs';

export default {
  component: Icon,
  title: 'UI/Icon',
  argTypes: {
    color: { control: 'select' },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Usage = (args: IconProps) => (
  <Flex
    gap="$3"
    css={{ p: '$5', maxW: '350px' }}
    align="flex-start"
    direction="column"
  >
    <Icon {...args} icon={<Icon icon="User" />} className="hi" inline />
    <Text fontSize="sm" as="div">
      We&apos;re using{' '}
      <Link isExternal href="https://tabler-icons.io/">
        Tabler Icons
      </Link>{' '}
      Icons as icon set, so you can check more details about it on their website
    </Text>
  </Flex>
);
