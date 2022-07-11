import { Box } from "../Box";
import { Button } from "../Button";
import { Stack } from "../Stack";
import { Text } from "../Text";

import { Focus } from "./Focus";

export default {
  component: Focus,
  title: "Helpers/Focus",
  argTypes: {},
};

export const ArrowNavigator = () => (
  <Box>
    <Focus.ArrowNavigator asChild autoFocus>
      <Stack gap="$3" direction="row">
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
      </Stack>
    </Focus.ArrowNavigator>
    <Text>Try to navigate between buttons using arrow keys</Text>
  </Box>
);
