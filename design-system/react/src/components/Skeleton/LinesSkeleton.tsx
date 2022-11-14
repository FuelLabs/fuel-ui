import type { ThemeUtilsCSS } from '@fuel-ui/css';

import { Box } from '../Box';
import { Flex } from '../Flex';

import { skeletonStyles } from './styles';

import { createComponent } from '~/utils';

type LineSkeletonProps = {
  linesNumber?: number;
  gap?: ThemeUtilsCSS['gap'];
};

export const LinesSkeleton = createComponent<LineSkeletonProps>(
  ({ css = {}, linesNumber = 1, gap = '$2', ...props }) => {
    return (
      <Flex css={skeletonStyles.column} gap={gap} {...props}>
        {Array.from({ length: linesNumber }).map((_, index) => {
          return (
            <Box
              key={index}
              css={
                linesNumber === index + 1
                  ? { ...css, ...skeletonStyles.line }
                  : { ...css, ...skeletonStyles.line, width: '100%' }
              }
            ></Box>
          );
        })}
      </Flex>
    );
  }
);
