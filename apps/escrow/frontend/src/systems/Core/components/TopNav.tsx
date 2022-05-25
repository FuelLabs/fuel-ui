import {
  Box,
  Container,
  Flex,
  IconButton,
  Stack,
  useFuelTheme,
} from "@fuels-ui/react";

export function TopNav() {
  const { theme, toggleTheme } = useFuelTheme();
  return (
    <Box css={{ borderBottom: "1px solid $gray5", background: "$gray3" }}>
      <Container>
        <Flex css={{ py: "$8" }}>
          <Stack gap="$6" direction="row" css={{ flex: 1 }}></Stack>
          <IconButton
            variant="link"
            aria-label="Theme Switcher"
            icon={theme === "light" ? "MoonIcon" : "SunIcon"}
            color={theme === "light" ? "gray" : "yellow"}
            onPress={toggleTheme}
          />
        </Flex>
      </Container>
    </Box>
  );
}
