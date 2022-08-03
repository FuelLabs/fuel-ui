import { colorKeys } from "@fuel-ui/css";

import { Box } from "../Box";
import { Icon } from "../Icon";

import type { ButtonProps } from "./Button";
import { Button } from "./Button";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    onPress: {
      action: "pressed",
    },
    size: {
      defaultValue: "md",
      control: "select",
    },
    color: {
      options: colorKeys,
      defaultValue: "accent",
      control: "select",
    },
    variant: {
      defaultValue: "solid",
      control: "select",
    },
    leftIcon: {
      options: Icon.iconList,
      control: "select",
    },
    rightIcon: {
      options: Icon.iconList,
      control: "select",
    },
  },
};

export const Sizes = (args: ButtonProps) => (
  <Box css={styles.wrapper}>
    <Button {...args} size="xs" onPress={() => console.log("helo")}>
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

export const Colors = (args: ButtonProps) => (
  <Box css={styles.gridList}>
    {colorKeys.map((color) => (
      <Button key={color} {...args} color={color}>
        Button
      </Button>
    ))}
  </Box>
);

export const WithIcon = (args: ButtonProps) => (
  <Box css={styles.wrapper}>
    <Button {...args} leftIcon="Calendar" leftIconAriaLabel="calendar">
      Button
    </Button>
    <Button {...args} rightIcon="Calendar" leftIconAriaLabel="calendar">
      Button
    </Button>
    <Button
      {...args}
      leftIcon="Calendar"
      leftIconAriaLabel="calendar"
      rightIcon="Calendar"
      rightIconAriaLabel="calendar"
    >
      Button
    </Button>
  </Box>
);

export const Loading = (args: ButtonProps) => (
  <Box css={styles.wrapper}>
    <Button {...args} isLoading>
      Button
    </Button>
  </Box>
);

export const Disabled = (args: ButtonProps) => (
  <Box css={styles.wrapper}>
    <Button {...args} isDisabled>
      Button
    </Button>
  </Box>
);

/**
 * Styles
 */
const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "$4",
  },
  gridList: {
    display: "grid",
    gap: "$4",
    gridTemplateColumns: "repeat(6, 1fr)",
  },
};
