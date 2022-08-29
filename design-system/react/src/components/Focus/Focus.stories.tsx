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
    <Stack gap="$3" direction="row" css={{ mb: "$3" }}>
      <Focus.ArrowNavigator autoFocus>
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
      </Focus.ArrowNavigator>
    </Stack>
    <Text>Try to navigate between buttons using arrow keys</Text>
  </Box>
);
