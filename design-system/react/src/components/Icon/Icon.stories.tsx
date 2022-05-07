import { useCopyToClipboard } from "react-use";

import { Box } from "../Box";

import type { IconProps } from "./Icon";
import { Icon } from "./Icon";

export default {
  component: Icon,
  title: "UI/Icon",
  argTypes: {
    color: { control: "select" },
    size: {
      defaultValue: 40,
      control: { type: "number" },
    },
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const Usage = (args: IconProps) => (
  <div>
    <Icon {...args} icon="BiAlarm" />
  </div>
);

export const AllIcons = () => {
  const [, copy] = useCopyToClipboard();
  return (
    <Box css={styles.list}>
      {Icon._iconList.map((key) => (
        <Box
          key={key}
          css={styles.iconWrapper}
          onClick={() => copy(key)}
          title="Click to copy"
        >
          <Icon key={key} icon={key} size={24} />
          <Box as="span" css={styles.iconLabel}>
            {key}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

const styles = {
  /**
   * List styles
   */
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    flexWrap: "wrap",
    maxW: "$full",
    color: "$gray12",
  },
  /**
   * Icon Wrapper styles
   */
  iconWrapper: {
    p: "$3",
    mt: "-1px",
    mr: "-1px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "$2",
    border: "1px solid $gray6",

    "&:hover": {
      cursor: "pointer",
    },
  },
  /**
   * Icon Label Styles
   */
  iconLabel: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxW: "$full",
    fontSize: "$xs",
    color: "$gray10",
  },
};
