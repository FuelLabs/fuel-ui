import type { AvatarProps } from '../Avatar';

import { AvatarSkeleton } from './AvatarSkeleton';
import { BlockSkeleton } from './BlockSkeleton';
import { LinesSkeleton } from './LinesSkeleton';
import { skeletonStyles } from './styles';

import { createComponent } from '~/utils';

export const variants = {
  block: BlockSkeleton,
  lines: LinesSkeleton,
  avatar: AvatarSkeleton,
} as const;

type PlaceholderVariant = keyof typeof variants;

type PlaceholderProps = {
  variant?: PlaceholderVariant;
  avatarSize?: AvatarProps['size'];
  linesNumber?: number;
};

export const Skeleton = createComponent<PlaceholderProps>(
  ({ variant = 'block', avatarSize = 'md', linesNumber, css }) => {
    const Component = variants[variant];

    return (
      <Component
        css={{ ...css, ...skeletonStyles.animation }}
        linesNumber={linesNumber}
        size={avatarSize}
      />
    );
  }
);
