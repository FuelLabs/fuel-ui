import { cx } from '@fuel-ui/css';

import { createComponent } from '../../utils';
import type { BoxProps } from '../Box';
import { Box } from '../Box';

import { useAvatarGenerated } from './hooks/useAvatarGenerated';

type OmitProps = 'children';
export type AvatarGeneratedProps = BoxProps & {
  hash: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'fuel' | 'random' | string;
};

export const AvatarGenerated = createComponent<
  AvatarGeneratedProps,
  unknown,
  OmitProps
>(({ hash, size = 'md', className, css, as, background, ...props }) => {
  const { svgString, totalSize } = useAvatarGenerated({
    background,
    hash,
    size,
  });
  const classes = cx(className, 'fuel_avatar-generated');

  return (
    <Box
      {...props}
      className={classes}
      as={as}
      css={{
        ...css,
        width: totalSize,
        height: totalSize,
        borderRadius: '100%',
        overflow: 'hidden',
      }}
      dangerouslySetInnerHTML={{
        __html: svgString,
      }}
    />
  );
});
