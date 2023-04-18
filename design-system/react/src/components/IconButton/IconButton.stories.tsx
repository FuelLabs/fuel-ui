import { Box } from '../Box';
import { Stack } from '../Box/Stack';

import type { IconButtonProps } from './IconButton';
import { IconButton } from './IconButton';

export default {
  component: IconButton,
  title: 'UI/IconButton',
};

export const Usage = (args: IconButtonProps) => (
  <Stack direction="row">
    <IconButton {...args} size="xs" aria-label="Button" icon="Calendar" />
    <IconButton {...args} size="sm" aria-label="Button" icon="Calendar" />
    <IconButton {...args} size="md" aria-label="Button" icon="Calendar" />
  </Stack>
);

export const WithTooltip = (args: IconButtonProps) => (
  <Box css={{ display: 'flex', gap: '$2' }}>
    <IconButton
      {...args}
      aria-label="Button"
      icon="Calendar"
      tooltip="View Calendar"
    />
  </Box>
);
