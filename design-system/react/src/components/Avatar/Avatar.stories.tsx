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
    <Avatar {...args} size="sm">
      <Avatar.Image
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
      <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
    </Avatar>
    <Avatar {...args} size="md">
      <Avatar.Image
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
      <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
    </Avatar>
    <Avatar {...args} size="lg">
      <Avatar.Image
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
      <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
    </Avatar>
  </Box>
);

export const Fallback = (args: AvatarProps) => (
  <Box css={{ display: "flex", alignItems: "center", gap: "$3" }}>
    <Avatar {...args}>
      <Avatar.Image
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
      <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
    </Avatar>
    <Avatar {...args}>
      <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
    </Avatar>
  </Box>
);
