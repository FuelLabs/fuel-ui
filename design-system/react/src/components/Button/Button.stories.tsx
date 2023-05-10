import { layerIntents } from '@fuel-ui/css';

import { Box } from '../Box';
import { Icon } from '../Icon';

import { Button } from './Button';
import type { ButtonProps } from './defs';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    onPress: {
      action: 'pressed',
    },
    size: {
      defaultValue: 'md',
      control: 'select',
    },
    intent: {
      options: layerIntents,
      defaultValue: 'primary',
      control: 'select',
    },
    variant: {
      defaultValue: 'solid',
      control: 'select',
    },
    leftIcon: {
      options: Icon.iconList,
      control: 'select',
    },
    rightIcon: {
      options: Icon.iconList,
      control: 'select',
    },
  },
};

export const Sizes = (args: ButtonProps) => {
  return (
    <Box css={styles.wrapper}>
      <Button {...args} size="xs">
        Button
      </Button>
      <Button {...args} size="sm">
        Button
      </Button>
      <Button {...args} size="md">
        Button
      </Button>
      <Button {...args} size="lg">
        Button
      </Button>
    </Box>
  );
};

export const Variants = (args: ButtonProps) => (
  <Box css={styles.wrapper}>
    <Button {...args} variant="solid">
      Button
    </Button>
    <Button {...args} variant="outlined">
      Button
    </Button>
    <Button {...args} variant="ghost">
      Button
    </Button>
    <Button {...args} variant="link">
      Button
    </Button>
  </Box>
);

export const intents = (args: ButtonProps) => (
  <Box css={styles.gridList}>
    {layerIntents.map((intent) => (
      <Button key={intent} {...args} intent={intent}>
        Button
      </Button>
    ))}
  </Box>
);

export const WithIcon = (args: ButtonProps) => (
  <Box css={styles.wrapper}>
    <Button
      {...args}
      size="xs"
      leftIcon="Calendar"
      leftIconAriaLabel="calendar"
    >
      Button
    </Button>
    <Button
      {...args}
      size="sm"
      leftIcon="Calendar"
      leftIconAriaLabel="calendar"
    >
      Button
    </Button>
    <Button
      {...args}
      size="md"
      leftIcon="Calendar"
      leftIconAriaLabel="calendar"
    >
      Button
    </Button>
    <Button
      {...args}
      size="lg"
      leftIcon="Calendar"
      leftIconAriaLabel="calendar"
    >
      Button
    </Button>
  </Box>
);

export const Loading = (args: ButtonProps) => (
  <Box css={styles.wrapper}>
    <Button {...args} variant="solid" isLoading>
      Button
    </Button>
    <Button {...args} variant="outlined" isLoading>
      Button
    </Button>
    <Button {...args} variant="ghost" isLoading>
      Button
    </Button>
    <Button {...args} variant="link" isLoading>
      Button
    </Button>
  </Box>
);

export const Disabled = (args: ButtonProps) => (
  <Box css={styles.wrapper}>
    <Button {...args} variant="solid" isDisabled>
      Button
    </Button>
    <Button {...args} variant="outlined" isDisabled>
      Button
    </Button>
    <Button {...args} variant="ghost" isDisabled>
      Button
    </Button>
    <Button {...args} variant="link" isDisabled>
      Button
    </Button>
  </Box>
);

/**
 * Styles
 */
const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
  },
  gridList: {
    display: 'grid',
    gap: '$4',
    gridTemplateColumns: 'repeat(6, 1fr)',
  },
};
