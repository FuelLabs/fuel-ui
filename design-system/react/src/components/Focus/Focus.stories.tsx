import { Box } from '../Box';
import { Stack } from '../Box/Stack';
import { Button } from '../Button';
import { Text } from '../Text';

import { Focus } from './Focus';

export default {
  component: Focus,
  title: 'Helpers/Focus',
  argTypes: {},
};

export const ArrowNavigator = () => (
  <Box>
    <Focus.ArrowNavigator contain>
      <Stack gap="$3" direction="row" css={{ mb: '$3' }}>
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
      </Stack>
    </Focus.ArrowNavigator>
    <Text>Try to navigate between buttons using arrow keys</Text>
  </Box>
);
