import { Text } from '../Text';

import { Badge } from './Badge';

export default {
  component: Badge,
  title: 'UI/Badge',
  argTypes: {},
};

export const Usage = () => (
  <Text fontSize="xs" css={{ display: 'flex', margin: 0, gap: '$2' }}>
    <Badge>Label</Badge>
    <Badge variant="solid">Label</Badge>
    <Badge variant="outlined">Label</Badge>
  </Text>
);
