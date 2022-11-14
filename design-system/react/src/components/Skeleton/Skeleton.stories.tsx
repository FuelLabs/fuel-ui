import { Flex } from '../Flex';

import { Skeleton } from './Skeleton';

export default {
  component: Skeleton,
  title: 'UI/Skeleton',
};

export const Avatars = () => (
  <Flex gap="$2" css={{ flexDirection: 'row' }}>
    <Skeleton variant="avatar" avatarSize="2xl" />
    <Skeleton variant="avatar" avatarSize="xl" />
    <Skeleton variant="avatar" avatarSize="lg" />
    <Skeleton variant="avatar" avatarSize="md" />
    <Skeleton variant="avatar" avatarSize="sm" />
    <Skeleton variant="avatar" avatarSize="xsm" />
  </Flex>
);
export const Block = () => (
  <Flex gap="$2" css={{ flexDirection: 'row' }}>
    <Skeleton variant="block" />
  </Flex>
);

export const Lines = () => (
  <Skeleton variant="lines" linesNumber={3} css={{ width: '100%' }} />
);

export const AllTogether = () => (
  <Flex gap="$2" css={{ flexDirection: 'column' }}>
    <Flex>
      <Skeleton variant="avatar" avatarSize="xl" />
    </Flex>
    <Skeleton variant="lines" linesNumber={3} css={{ width: '100%' }} />
    <Skeleton variant="block" css={{ height: '500px' }} />
  </Flex>
);
