import { colorKeys } from "@fuel/css";

import { Box } from "../Box";
import { Icon } from "../Icon";

import type { TagProps } from "./Tag";
import { Tag } from "./Tag";
import { TagCloseButton } from "./TagCloseButton";

export default {
  component: Tag,
  title: "UI/Tag",
  argTypes: {
    size: {
      defaultValue: "sm",
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

export const Sizes = (args: TagProps) => (
  <Box css={styles.wrapper}>
    <Tag {...args} size="xs">
      Label
    </Tag>
    <Tag {...args} size="sm">
      Label
    </Tag>
    <Tag {...args} size="md">
      Label
    </Tag>
  </Box>
);

export const Variants = (args: TagProps) => (
  <Box css={styles.wrapper}>
    <Tag {...args} variant="solid">
      Label
    </Tag>
    <Tag {...args} variant="outlined">
      Label
    </Tag>
    <Tag {...args} variant="ghost">
      Label
    </Tag>
  </Box>
);

export const Colors = (args: TagProps) => (
  <Box css={styles.gridList}>
    {colorKeys.map((color) => (
      <Tag key={color} {...args} color={color}>
        Label
      </Tag>
    ))}
  </Box>
);

export const WithIcon = (args: TagProps) => (
  <Box css={styles.wrapper}>
    <Tag {...args} leftIcon="BiCalendar" leftIconAriaLabel="calendar">
      Label
    </Tag>
    <Tag {...args} rightIcon="BiCalendar" rightIconAriaLabel="calendar">
      Label
    </Tag>
  </Box>
);

export const WithClose = (args: TagProps) => (
  <Box css={styles.wrapper}>
    <Tag {...args} leftIcon="BiCalendar" leftIconAriaLabel="calendar">
      Label
      <TagCloseButton />
    </Tag>
  </Box>
);

export const Loading = (args: TagProps) => (
  <Box css={styles.wrapper}>
    <Tag {...args} isLoading>
      Label
    </Tag>
  </Box>
);

export const Disabled = (args: TagProps) => (
  <Box css={styles.wrapper}>
    <Tag {...args} isDisabled>
      Label
    </Tag>
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
