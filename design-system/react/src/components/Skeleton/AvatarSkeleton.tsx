import type { AvatarProps } from '../Avatar';
import { Box } from '../Box';

import { skeletonStyles } from './styles';

import { createComponent, createStyledElement } from '~/utils';

export const AvatarSkeleton = createComponent<{ size: AvatarProps['size'] }>(
  ({ size, ...props }) => {
    return createStyledElement(
      Box,
      { ...skeletonStyles.avatar },
      { size },
      props
    );
  }
);
