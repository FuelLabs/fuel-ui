import { Box } from "../Box";

import type { AvatarProps } from "./Avatar";
import { Avatar } from "./Avatar";

export default {
  component: Avatar,
  title: "UI/Avatar",
  argTypes: {},
};

export const Sizes = (args: AvatarProps) => (
  <Box css={{ display: "flex", alignItems: "center", gap: "$3" }}>
    <Avatar
      {...args}
      size="sm"
      name="Colm Tuite"
      src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
    />
    <Avatar
      {...args}
      size="md"
      name="Colm Tuite"
      src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
    />
    <Avatar
      {...args}
      size="lg"
      name="Colm Tuite"
      src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
    />
  </Box>
);

export const Fallback = (args: AvatarProps) => (
  <Box css={{ display: "flex", alignItems: "center", gap: "$3" }}>
    <Avatar
      {...args}
      name="Colm Tuite"
      src="https://images.unsplash.com/photo-1492633423870"
    />
  </Box>
);

export const Generated = (args: AvatarProps) => (
  <Box css={{ display: "flex", alignItems: "center", gap: "$3" }}>
    <Avatar.Generated
      {...args}
      hash="0x760a9e947de58fbf133a1d0ec97ae9aa18adfe71"
    />
  </Box>
);
