import { Box } from '../Box';

import { Avatar } from './Avatar';
import type { AvatarProps } from './defs';

export default {
  component: Avatar,
  title: 'UI/Avatar',
  argTypes: {},
};

const AVATAR_SIZES = ['xsm', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

const EXAMPLE_HASHES = [
  '0x15db4a4d9e35fa8c0b5f92b13924d1610c5d618e',
  '0xd5d5bcbf0b8e2f3c3e7b96529d1c96a1a4bcad89',
  '0xaac9ebfe1c128f5e8d5b26b0ed6c5f13ff2a08c2',
  '0x7231e6c37a5d5d5ab5df6aa5b6e3e8c861372a3a',
  '0x01a8b8af1b6d2c7d0f6c12d8e1c29592f9ef24ea',
  '0xf8de3b40c1beecf731d0c1b4d4e4c0e9a25a6c87',
  '0x46b5b0e1f6a94c8d87d1c2d52330c9fa44f3a0fe',
  '0x9371db0a3a4ea1d4c4de9b9f6a9df2e33e8a5691',
  '0xe1c6d2b6a5b7eac9a127b1f8bc1a0b51a3905f6d',
  '0x0a3b5827ec9f6a1d8f5b6c03e7d2c6fbb0f8d129',
];

export const Sizes = (args: AvatarProps) => (
  <Box css={{ display: 'flex', alignItems: 'center', gap: '$3' }}>
    {AVATAR_SIZES.map((size) => (
      <Avatar
        {...args}
        size={size}
        key={size}
        name="Colm Tuite"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      />
    ))}
  </Box>
);

export const Fallback = (args: AvatarProps) => (
  <Box css={{ display: 'flex', alignItems: 'center', gap: '$3' }}>
    <Avatar
      {...args}
      name="Colm Tuite"
      src="https://images.unsplash.com/photo-1492633423870"
    />
  </Box>
);

export const Generated = (args: AvatarProps) => (
  <Box css={{ display: 'flex', alignItems: 'center', gap: '$3' }}>
    {EXAMPLE_HASHES.map((hash) => {
      return <Avatar.Generated key={hash} {...args} hash={hash} />;
    })}
  </Box>
);

export const GeneratedCustomSize = (args: AvatarProps) => (
  <Box css={{ display: 'flex', alignItems: 'center', gap: '$3' }}>
    {EXAMPLE_HASHES.map((hash) => {
      return <Avatar.Generated size={16} key={hash} {...args} hash={hash} />;
    })}
  </Box>
);
