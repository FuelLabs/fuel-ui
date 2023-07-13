import { layerIntents } from '@fuel-ui/css';

import { Text } from '../Text';

import { Badge } from './Badge';
import type { BadgeProps } from './defs';

export default {
  component: Badge,
  title: 'UI/Badge',
  argTypes: {},
};

export const Usage = (args: BadgeProps) => (
  <Text fontSize="xs" css={{ display: 'flex', margin: 0, gap: '$2' }}>
    <Badge {...args}>Label</Badge>
    <Badge {...args} variant="solid">
      Label
    </Badge>
    <Badge {...args} variant="outlined">
      Label
    </Badge>
  </Text>
);

export const Intents = (args: BadgeProps) => (
  <Text fontSize="xs" css={{ display: 'flex', margin: 0, gap: '$2' }}>
    {layerIntents.map((intent) => (
      <Badge key={intent} {...args} intent={intent}>
        Label
      </Badge>
    ))}
  </Text>
);
export const Disabled = (args: BadgeProps) => (
  <Text fontSize="xs" css={{ display: 'flex', margin: 0, gap: '$2' }}>
    {layerIntents.map((intent) => (
      <Badge key={intent} {...args} intent={intent} isDisabled>
        Label
      </Badge>
    ))}
  </Text>
);
