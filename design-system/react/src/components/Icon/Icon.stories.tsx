import { useCopyToClipboard } from "react-use";

import { Box } from "../Box";
import { Button } from "../Button";
import { Flex } from "../Flex";
import { Link } from "../Link";
import { Text } from "../Text";

import type { IconProps } from "./Icon";
import { Icon } from "./Icon";

export default {
  component: Icon,
  title: "UI/Icon",
  argTypes: {
    color: { control: "select" },
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const Usage = (args: IconProps) => (
  <Flex css={{ p: "$5", maxW: "350px" }} align="flex-start" direction="column">
    <Icon {...args} icon="PersonIcon" inline />
    <Text fontSize="sm">
      We&apos;re using{" "}
      <Link isExternal href="https://https://icons.modulz.app/">
        Radix
      </Link>{" "}
      Icons as icon set, so you can check more details about it on their website
    </Text>
  </Flex>
);

export const AllIcons = () => {
  const [, copy] = useCopyToClipboard();
  return (
    <Box css={styles.list}>
      {Icon.iconList.map((key) => (
        <Box key={key} css={styles.iconWrapper}>
          <Icon key={key} icon={key} />
          <Box as="span" css={styles.iconLabel}>
            {key}
          </Box>
          <Button variant="link" onPress={() => copy(key)}>
            Copy
          </Button>
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
