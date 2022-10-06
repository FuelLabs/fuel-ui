import { css } from '@fuel-ui/css';

import { Box } from '../Box';
import { Button } from '../Button';
import { Grid } from '../Grid';
import { Stack } from '../Stack';

import { toast } from './Toast';

export default {
  title: 'Overlay/Toast',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Usage = () => (
  <Stack gap="$4" direction="row">
    <Button onPress={() => toast('Just an information')} color="gray">
      Show info
    </Button>
    <Button onPress={() => toast.success('Congrats!')}>Show success</Button>
    <Button onPress={() => toast.error('Ooops, some error')} color="red">
      Show error
    </Button>
    <Button
      onPress={() => toast('Just an information', { icon: '⚠️' })}
      color="gray"
    >
      Custom Icon
    </Button>
  </Stack>
);

Usage.parameters = {
  layout: 'centered',
};

const POSITIONS_TOP = [
  { value: 'top-left', label: 'Top left' },
  { value: 'top-center', label: 'Top center' },
  { value: 'top-right', label: 'Top right' },
];
const POSITIONS_BOTTOM = [
  { value: 'bottom-left', label: 'Bottom left' },
  { value: 'bottom-center', label: 'Bottom center' },
  { value: 'bottom-right', label: 'Bottom right' },
];

export const Positions = () => (
  <Grid gap="$4" templateColumns="repeat(3, 1fr)" templateRows="repeat(2, 1fr)">
    {POSITIONS_TOP.map((pos) => (
      <Button
        key={pos.value}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onPress={() => toast('Hello world', { position: pos.value as any })}
        color="gray"
      >
        {pos.label}
      </Button>
    ))}
    {POSITIONS_BOTTOM.map((pos) => (
      <Button
        key={pos.value}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onPress={() => toast('Hello world', { position: pos.value as any })}
        color="gray"
      >
        {pos.label}
      </Button>
    ))}
  </Grid>
);

Positions.parameters = {
  layout: 'centered',
};

export const Custom = () => (
  <Stack gap="$4" direction="row">
    <Button
      color="gray"
      onPress={() =>
        toast.custom(() => <Box className={styles.custom()}>Hello world</Box>)
      }
    >
      Custom Toast
    </Button>
  </Stack>
);

Custom.parameters = {
  layout: 'centered',
};

const styles = {
  custom: css({
    py: '$2',
    px: '$6',
    borderRadius: '$full',
    backgroundColor: '$accent10',
    color: 'white',
  }),
};
