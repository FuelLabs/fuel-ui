import type { ThemeUtilsCSS } from '@fuel-ui/css';

import { skeletonStyles } from '../styles';

import { Box } from '~/components/Box';
import { Flex } from '~/components/Flex';
import { createComponent } from '~/utils';

type AvatarPlaceholderProps = {
  lines?: number;
  css?: ThemeUtilsCSS;
};

export const Line = createComponent<AvatarPlaceholderProps>(({ lines = 3 }) => {
  return (
    <Flex css={skeletonStyles.linesWrapper}>
      {Array.from({ length: lines }).map((_, index) => (
        <Box css={skeletonStyles.line} key={index} />
      ))}
    </Flex>
  );
});
