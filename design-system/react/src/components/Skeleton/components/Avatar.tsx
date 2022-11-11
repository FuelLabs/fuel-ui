import { skeletonStyles } from '../styles';

import type { AvatarProps } from '~/components/Avatar';
import { Box } from '~/components/Box';
import { createComponent, createStyledElement } from '~/utils';

type AvatarPlaceholderProps = {
  size?: AvatarProps['size'];
};

export const Avatar = createComponent<AvatarPlaceholderProps>(({ size }) => {
  const children = <Box css={skeletonStyles.avatar} />;

  return createStyledElement(null, null, null, { size }, children);
});
