import { Box, Button, useFuelTheme } from '@fuel-ui/react';

export function App() {
  const { setTheme, current } = useFuelTheme();

  function toggleTheme() {
    setTheme(current === 'dark' ? 'custom' : 'dark');
  }

  return (
    <Box.Centered minWS minHS>
      <Button onPress={toggleTheme}>Toggle Theme</Button>
    </Box.Centered>
  );
}
